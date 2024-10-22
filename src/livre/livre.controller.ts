import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { LivreService } from './livre.service';
import { createLivreDTO } from './livre.DTO';

@Controller('livre')
export class LivreController {
    constructor(private livreService: LivreService,) {}

    @Post("/createLivre")
    createLivre(@Body() Body:createLivreDTO){
        return this.livreService.create(Body.titre,Body.auteur,Body.genre,Body.rating)
    }

    @Get("/getLivre")
    findLivre(@Body("id") Body: number){
        return this.livreService.findOne(Body)
    }
}
