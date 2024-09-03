import { Module } from '@nestjs/common';
import { PokemonModule } from './modules/pokemon/pokemon.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    PokemonModule,
    MongooseModule.forRoot(
      'mongodb://bsquiroz:12345@localhost:27017/pokedex-db?authSource=admin',
    ),
  ],
})
export class AppModule {}
