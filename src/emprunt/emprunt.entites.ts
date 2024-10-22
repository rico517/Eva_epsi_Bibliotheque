import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Emprunt {
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    userId: number;

    @Column()
    livreId: number;

    @Column({ type: "timestamp" })
    dateEmprunt: Date;

    @Column({ type: "timestamp", nullable: true })
    dateRetour: Date;
}
