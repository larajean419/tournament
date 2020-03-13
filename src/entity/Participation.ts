import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";

import {Team} from "./Team"
import { Tournament } from "./Tournament";
import { TournamentYear } from "./TournamentYear";

@Entity()
export class Participation{

    @PrimaryGeneratedColumn()
    participationId : number

    @Column()
    teamId : number

    @Column()
    tournamentId : number

    @Column()
    tournamentYearId : number

    @ManyToOne(type => Team, team => team.participations)
    team  : Team

    @ManyToOne(type => Tournament, tournament => tournament.participations)
    tournament  : Tournament

    @ManyToOne(type => TournamentYear, tournamentYear => tournamentYear.participations)
    tournamentYear  : TournamentYear

}