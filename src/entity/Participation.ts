import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";

import {Player} from "./Player"
import { Tournament } from "./Tournament";
import { TournamentYear } from "./TournamentYear";

@Entity()
export class Participation{

    @PrimaryGeneratedColumn()
    participationId : number

    @Column()
    playerId : number

    @Column()
    tournamentId : number

    @Column()
    tournamentYearId : number

    @ManyToOne(type => Player, player => player.participations)
    player  : Player

    @ManyToOne(type => Tournament, tournament => tournament.participations)
    tournament  : Tournament

    @ManyToOne(type => TournamentYear, tournamentYear => tournamentYear.participations)
    tournamentYear  : TournamentYear

}