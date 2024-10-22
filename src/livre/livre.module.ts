import { Module } from '@nestjs/common';
import { LivreController } from './livre.controller';
import { LivreService } from './livre.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Livre } from './livre.entites';

@Module({
  imports: [TypeOrmModule.forFeature([Livre])],
  controllers: [LivreController],
  providers: [LivreService]
})
export class LivreModule {}
