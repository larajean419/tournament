import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Participation } from "./Participation";
@Entity()
export class TournamentYear{

    @PrimaryGeneratedColumn()
    id : number
    

    @Column()
    year : string

    @OneToMany(type => Participation, participations => participations.tournamentYear)
     participations : Participation[] 
}