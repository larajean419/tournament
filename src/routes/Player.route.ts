import {Router} from "express"
import {PlayerController} from "../controllers/PlayerController"
const playerRouter = Router()

playerRouter.post("/add",PlayerController.add)

export default playerRouter