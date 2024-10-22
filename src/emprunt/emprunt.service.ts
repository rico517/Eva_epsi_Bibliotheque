import { Injectable } from '@nestjs/common';
import { Emprunt } from './emprunt.entites';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EmpruntService {
    constructor(@InjectRepository(Emprunt) private repo: Repository<Emprunt>) {}

    create(userId: number, livreId: number, dateEmprunt: Date, dateRetour: Date) {
        const emprunt = this.repo.create({
          userId: userId,
          livreId: livreId,
          dateEmprunt: dateEmprunt,
          dateRetour: dateRetour,
        });
        this.repo.save(emprunt);
      }
}
