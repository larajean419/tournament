import { Request,Response } from "express";
import {getRepository} from "typeorm"
import { Match } from "../entity/Match";
import { Contest } from "../entity/Contest";

export class MatchController{
    
    static matchWinner = async(req:Request,res:Response) =>{

        const matchRepo = getRepository(Match)

        let allContest = await matchRepo
        .createQueryBuilder("match")
        .innerJoinAndSelect("match.versus","versus")
        .getMany()
        
        res.json(allContest
        )
       
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