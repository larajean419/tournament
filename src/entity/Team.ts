import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {Player} from "./Player"
import { Participation } from "./Participation";
import { Contest } from "./Contest";
@Entity()
export class Team {

    @PrimaryGeneratedColumn()
    id: number

    @Column()

    @Column({unique : true})
    name: string

    @Column({unique : true})
    warName: string
    
    @Column({type : "date"})
    birth : string

    @Column({nullable : true})
    flag : string

    @Column()
    description : string

    //relation avec player
    @OneToMany(type => Player, player => player.team,  {onDelete : "CASCADE"})
    players : Player[]

    //ternary relation for tournament's registrating
    @OneToMany(type => Participation, participations => participations.team)
     participations : Participation[] 

    @OneToMany(type => Contest, versus => versus.team)
    versus : Contest[]


}
