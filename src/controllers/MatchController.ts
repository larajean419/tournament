import { Request,Response } from "express";
import {getRepository} from "typeorm"
import { Match } from "../entity/Match";

export class MatchController{
    
    static matchWinner = async(req:Request,res:Response) =>{

        const matchRepo = getRepository(Match)

        let a = await matchRepo
        .createQueryBuilder("match")
        .innerJoinAndSelect("match.versus","versus")
      
        .getMany()

res.json(a) 

    }
}