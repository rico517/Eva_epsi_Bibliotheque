import { Expose } from "class-transformer";
import { IsDate, IsNumber, isNumber, IsString } from "class-validator";

export class createEmpruntDTO {
    @IsNumber()
    userId: number;

    @IsNumber()
    livreId: number;

    @IsDate()
    dateEmprunt: Date;

    @Expose()
    dateRetour: Date;



}