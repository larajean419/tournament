import {Request,Response} from "express"
import {getRepository} from "typeorm"
import { Participation } from "../entity/Participation";

export class PartiController{
    
    static signTeam = async(req:Request,res:Response) =>{

        let {teamId,tournamentId,tournamentYearId} = req.body
        const partiRepo = getRepository(Participation)

        let parti = new Participation()
        parti.tournamentId = tournamentId
        parti.teamId = teamId
        parti.tournamentYearId = tournamentYearId

        await partiRepo.save(parti)
        .then(()=> res.json({"success":"team inscription ok !"}))
        .catch(err =>res.status(400).json(err.message))
    }

    static listTeams = async(req:Request, res:Response)=>{
        const partiRepo = getRepository(Participation)

        await partiRepo.find({
            relations : ["team","tournament","tournamentYear"]
        })
        .then((teams)=>res.json({"signTeams " : teams }))
        .catch(err => res.json(err.message))
    }
}