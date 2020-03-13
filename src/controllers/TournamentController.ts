import { Request,Response } from "express";
import {getRepository} from "typeorm"
import { Tournament } from "../entity/Tournament";
import tournamentRouter from "../routes/Tournament.route";
import { REPLServer } from "repl";

export class TournamentController{

   
   static add = async(req:Request,res:Response)=>{
       const tournamentRepo = getRepository(Tournament)
       let{name,categorie,location,begin,end,entryFee} = req.body

       let tournament = new Tournament()
       tournament.name = name
       tournament.categorie = categorie
       tournament.location = location
       tournament.begin = begin
       tournament.end = end
       tournament.isAnnounced = false
       tournament.entryFee = entryFee

       await tournamentRepo.save(tournament)
       .then(()=> res.json({"success ":"tournament created !"}))
       .catch(err => res.status(400).json(err.message))
   }

   static listTournaments = async(req:Request,res:Response) =>{
        const tournamentRepo = getRepository(Tournament)

        tournamentRepo.find()
        .then(tournaments => res.json(tournaments))
        .catch(err => res.json(err.message))
   }

   
  
}