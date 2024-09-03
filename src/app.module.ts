import { Module } from '@nestjs/common';
import { PokemonModule } from './modules/pokemon/pokemon.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CommonModule } from './common/common.module';
import { SeedModule } from './modules/seed/seed.module';

@Module({
  imports: [
    PokemonModule,
    SeedModule,
    CommonModule,
    MongooseModule.forRoot(
      'mongodb://bsquiroz:12345@localhost:27017/pokedex-db?authSource=admin',
    ),
  ],
})
export class AppModule {}
