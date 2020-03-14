import { Router } from "express"
import { TournamentController } from "../controllers/TournamentController"
import { MatchController } from "../controllers/MatchController"

const tournamentRouter = Router()

tournamentRouter.post("/create",TournamentController.add)
tournamentRouter.get("/",TournamentController.listTournaments)
tournamentRouter.post("/draw",TournamentController.setContestDraw)
tournamentRouter.get("/contest",TournamentController.contestSheet)

//get match winner
tournamentRouter.get("/winner",MatchController.matchWinner)
//setup team contest draw



export default tournamentRouter