import { Module } from '@nestjs/common';
import { EmpruntController } from './emprunt.controller';
import { EmpruntService } from './emprunt.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Emprunt } from './emprunt.entites';

@Module({
  imports: [TypeOrmModule.forFeature([Emprunt])],
  controllers: [EmpruntController],
  providers: [EmpruntService]
})
export class EmpruntModule {}
