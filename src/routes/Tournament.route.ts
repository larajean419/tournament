import { Router } from "express"
import { TournamentController } from "../controllers/TournamentController"

const tournamentRouter = Router()

tournamentRouter.post("/create",TournamentController.add)
tournamentRouter.get("/",TournamentController.listTournaments)



export default tournamentRouter