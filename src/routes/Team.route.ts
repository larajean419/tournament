import {Router} from "express"
import { TeamController } from "../controllers/TeamController";
const teamRouter = Router()

teamRouter.post("/add",TeamController.add)
teamRouter.get("/",TeamController.allTeams)
teamRouter.get("/:id",TeamController.teamPlayers)
teamRouter.delete("/disolve/:id",TeamController.desolveTeam)

export default teamRouter