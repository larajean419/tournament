import {Request,Response} from "express"
import {getRepository} from "typeorm"
import { Team } from "../entity/Team"
import teamRouter from "../routes/Team.route"

export class TeamController{

    static add = async(req:Request, res:Response) =>{
        const teamRepo = getRepository(Team)
        let {name,warName,birth,description}  = req.body

        let team = new Team()

        team.name = name
        team.warName = warName
        team.birth = birth
        team.description = description

        await teamRepo.save(team)
        .then(()=> {
            res.json({"success": "team added "})
        })
        .catch(err => res.json(err.message))

       

    }

    static allTeams = async(req:Request,res:Response) =>{
        const teamRepo = getRepository(Team)

            await teamRepo.find()
            .then((teams)=>res.json(teams))
            .catch(err => res.json(err))
            

    }
     static teamPlayers   = async(req:Request,res:Response) =>{
        const teamRepo = getRepository(Team)
        const teamId = req.params.id

        await teamRepo.find({
            relations : ["players"],
            where : {id : teamId},
        })
        .then((teams)=>res.json(teams))
        .catch(err => res.json(err))
    } 

    static desolveTeam = async(req:Request,res:Response) =>{

        
        getRepository(Team).delete(req.params.id)
        .then(()=> res.json({"success": "team disolved"}))
        .catch(err => res.json(err.message))
        
    }

}