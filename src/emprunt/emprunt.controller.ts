import { Body, Controller, Post } from '@nestjs/common';
import { createEmpruntDTO } from './emprunt.DTO';
import { EmpruntService } from './emprunt.service';

@Controller('emprunt')
export class EmpruntController {
    constructor(private empruntService: EmpruntService,) {}
    @Post("/createEmprunt")
    createEmprunt(@Body() Body:createEmpruntDTO){
        return this.empruntService.create(Body.userId,Body.livreId,Body.dateEmprunt,Body.dateRetour)
    }
}
