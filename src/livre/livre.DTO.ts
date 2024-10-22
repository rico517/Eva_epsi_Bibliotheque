import { Expose } from "class-transformer";
import { isNumber, IsString } from "class-validator";

export class createLivreDTO {
    @IsString()
    titre: string;

    @IsString()
    auteur: string;

    @IsString()
    genre: string;

    @Expose()
    rating: number;


}