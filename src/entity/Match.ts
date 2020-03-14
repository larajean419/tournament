import { Entity, PrimaryColumn, Column,OneToMany } from "typeorm";
import { Contest } from "./Contest";

@Entity()
export class Match{

    @PrimaryColumn()
    id : string

    @Column()
    leg : string

    @OneToMany(type => Contest, versus => versus.match)
    versus : Contest[]

}