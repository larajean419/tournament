import "reflect-metadata";
import {createConnection} from "typeorm"
import * as express from "express"
import * as bodyParser from "body-parser"
import * as cors from "cors"

import  teamRouter from "./routes/Team.route"
import playerRouter from "./routes/Player.route"
import  participationRouter  from "./routes/Participation.route"
import tournamentRouter from "./routes/Tournament.route";

createConnection().then(async connection => {

   const app = express()
   
   app.use(express.json())
   app.use(cors())
   app.use(bodyParser.json())
   app.use(bodyParser.urlencoded({extended : true}))


   app.listen(8080, () =>{
       console.log("serveur en écoute ! ")
   })
   

   app.use("/teams",teamRouter)
   app.use("/players",playerRouter)
   app.use("/tournament",participationRouter)
   app.use("/tournaments",tournamentRouter)

}).catch(error => console.log(error));
