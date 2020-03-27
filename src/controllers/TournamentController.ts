import { Request,Response } from "express";
import {getRepository} from "typeorm"
import { Tournament } from "../entity/Tournament";
import { Contest } from "../entity/Contest";
import { Match } from "../entity/Match";



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

        await tournamentRepo.find()
        .then(tournaments => res.json(tournaments))
        .catch(err => res.json(err.message))
   }

   static setContestDraw = async(req:Request,res:Response) =>{
       const contestRepo = getRepository(Contest)
       const matchRepo = getRepository(Match)
       let {teamId,tournamentId,matchId,leg} = req.body

       let contest = new Contest()
       contest.tournamentId = tournamentId
       contest.teamId = teamId
       contest.matchId = matchId
       
     
         let match = new Match()
        match.id = matchId
        match.leg =leg

       
        await TournamentController.isMatchNotSet(matchId)
        .then(()=>{
          matchRepo.save(match).then(()=> console.log("ok")).catch(err => console.log("non ok")) 
        })
        .catch(err => console.log(err.message))
    
        
       await contestRepo.save(contest)
       .then(()=> res.json({"success":"ok"}))
       .catch(err => res.status(400).json(err.message))


       //generate all next round
   }

   static contestSheet = async(req:Request,res:Response) =>{
       const contestRepo = getRepository(Contest)
       const matchRepo = getRepository(Match)

       await matchRepo.find({
          relations : ["versus"]
       })

       .then(matches => res.json(matches))
       .catch(err => res.json(err.message)) 
   }

   //should be mini middleware
    static isMatchNotSet =  async(matchId:string) => {
        const matchRepo = getRepository(Match)
       
        await matchRepo.find({
            where : {id : matchId}
        })
        .then((match)=>{
            if(!(match)) return true
            else return false
        })
        .catch(err => console.log("err"))

       
   }

}