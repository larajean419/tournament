import {Entity, PrimaryGeneratedColumn, Column,OneToMany} from "typeorm";
import { Participation } from "./Participation";
import { Contest } from "./Contest";
@Entity()
export class Tournament{

    

    @PrimaryGeneratedColumn()
    id : number

    @Column({unique : true})
    name : string

    @Column()
    categorie : string

    @Column()
    location : string

    @Column({nullable : true}) 
    flag : string

    @Column({type: "date"}) 
    begin : string

    @Column({type : "date"})
    end : string

    @Column()
    isAnnounced : false

    @Column({type : "float"})
    entryFee : number

    //relation ternaire

    @OneToMany(type => Participation, participations => participations.tournament)
     participations : Participation[] 

     @OneToMany(type => Contest, versus => versus.tournament)
     versus : Contest[]

}