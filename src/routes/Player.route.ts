import {Router} from "express"
import {PlayerController} from "../controllers/PlayerController"
const playerRouter = Router()

playerRouter.post("/add",PlayerController.add)
playerRouter.get("/",PlayerController.allPlayers)

export default playerRouter