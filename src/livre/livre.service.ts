import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Livre } from './livre.entites';

@Injectable()
export class LivreService {
    constructor(@InjectRepository(Livre) private repo: Repository<Livre>) {}

    create(titre: string, auteur: string,genre: string,rating: number) {
        const livre = this.repo.create({
          titre : titre,
          auteur : auteur,
          genre : genre,
          rating : rating
        });
        this.repo.save(livre);
      }
    findOne(id: number) {
        const livre = this.repo.findOneBy({ id });
        return livre;
      }
}

