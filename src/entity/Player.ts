import {Column, Entity, PrimaryGeneratedColumn, ManyToMany, ManyToOne, OneToMany} from "typeorm";
import {Team} from "./Team"
@Entity()
export class Player{

    @PrimaryGeneratedColumn()
    id : number

    @Column()
    firstname : string

    @Column()
    lastname : string

    @Column({nullable : true})
    warName : string

    @Column({nullable : true})
    sex : string

    @Column({nullable : true})
    birth : Date

    @Column({nullable : true})
    birthLocation : string

    @Column()
    description : string

    //relation avec team

    @ManyToOne(type => Team, team => team.players)
    team : Team


    
}