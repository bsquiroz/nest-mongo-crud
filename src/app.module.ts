import { Module } from '@nestjs/common';
import { PokemonModule } from './modules/pokemon/pokemon.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    PokemonModule,
    CommonModule,
    MongooseModule.forRoot(
      'mongodb://bsquiroz:12345@localhost:27017/pokedex-db?authSource=admin',
    ),
  ],
})
export class AppModule {}
