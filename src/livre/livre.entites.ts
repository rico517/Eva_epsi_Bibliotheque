import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Livre {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titre: string;

  @Column()
  auteur: string;

  @Column()
  genre: string;

  @Column()
  rating: number;

}