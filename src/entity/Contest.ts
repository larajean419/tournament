import { Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne } from "typeorm";
import { Team } from "./Team";
import { Tournament } from "./Tournament";
import { Match } from "./Match";

@Entity()
export class Contest{

    @PrimaryGeneratedColumn()
    contestId : number

    @Column()
    teamId : number

    @Column()
    tournamentId : number

    @Column()
    matchId : string

    @Column({type: "integer",nullable : true})
    score : number

    @Column({nullable : true})
    isTeamActive : boolean

   @ManyToOne(type => Team, team => team.versus)
   team : Team

   @ManyToOne(type => Tournament, tournament => tournament.versus)
   tournament : Tournament

   @ManyToOne(type => Match, match => match.versus)
   match : Match
}