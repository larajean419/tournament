import {Entity, PrimaryGeneratedColumn, Column,OneToMany} from "typeorm";
import { Participation } from "./Participation";
@Entity()
export class Tournament{

    @PrimaryGeneratedColumn()
    id : number

    @Column()
    name : string

    @Column()
    categorie : string

    @Column()
    location : string

    @Column() 
    flag : string

    @Column() 
    begin : Date

    @Column()
    end : Date

    @Column()
    isAnnounced : false

    @Column({type : "float"})
    entryFee : number

    //relation ternaire

    @OneToMany(type => Participation, participations => participations.tournament)
     participations : Participation[] 

}