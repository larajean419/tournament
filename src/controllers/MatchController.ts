import { Request,Response } from "express";
import {getRepository} from "typeorm"
import { Match } from "../entity/Match";
import { Contest } from "../entity/Contest";

export class MatchController{
    
    static matchWinner = async(req:Request,res:Response) =>{
        const tournamentId = req.params.tournamentId
        const matchRepo = getRepository(Match)
        const leg:string = req.params.leg
       
     try{
    let wi =  await matchRepo
    .createQueryBuilder("match")
    .innerJoinAndSelect("match.versus","contest")
    .where("match.leg = :leg",{leg : leg})
    .andWhere("contest.tournamentId = :tid",{tid : tournamentId})
    .andWhere("contest.isTeamActive = true")
    .getMany()
    
    res.json(wi)
    }
 catch(err) {res.json(err.message)} 
       
    }

    static scoring = async(req:Request,res:Response) =>{
        const r = getRepository(Match)
        
         const contestRepo = getRepository(Contest)
         let {contestId,score} = req.body

        
         await contestRepo.update(contestId,{score :score}) 
         .then(()=> res.json("ok"))
         .catch(err => res.json(err.message))
       
    }

  
}