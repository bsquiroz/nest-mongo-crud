import { Injectable } from '@nestjs/common';
import { PokemonResponse } from './interfaces/poke-response.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from '../pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
  ) {}

  async executeSeed() {
    await this.pokemonModel.deleteMany();

    const data = await fetch('https://pokeapi.co/api/v2/pokemon?limit=650');
    const res: PokemonResponse = await data.json();

    // await this.insertWayOne(res);
    // await this.insertWayTwo(res);
    await this.insertWayThree(res);

    return 'Seed execute successfully!!!';
  }

  async insertWayOne(res: PokemonResponse) {
    for (const { name, url } of res.results) {
      const obj = {
        name,
        no: Number(url.split('/').slice(-2)[0]),
      };

      await this.pokemonModel.create(obj);
    }
  }

  async insertWayTwo(res: PokemonResponse) {
    const insertPromiseArr = res.results.map(({ name, url }) => {
      return this.pokemonModel.create({
        name,
        no: Number(url.split('/').slice(-2)[0]),
      });
    });

    await Promise.all(insertPromiseArr);
  }

  async insertWayThree(res: PokemonResponse) {
    const insertPromiseArr = res.results.map(({ name, url }) => ({
      name,
      no: Number(url.split('/').slice(-2)[0]),
    }));

    await this.pokemonModel.insertMany(insertPromiseArr);
  }
}
