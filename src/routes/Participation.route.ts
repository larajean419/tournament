import { Router } from "express";
import { Participation } from "../entity/Participation";
import { PartiController } from "../controllers/PartiController";

const participationRouter = Router()

participationRouter.post("/signTeam",PartiController.signTeam)
participationRouter.get("/",PartiController.listTeams)

export default participationRouter
