import  express from "express";
import bodyParser from "body-parser";
import { exports } from "./default.js";
import router from "../routes/index.routes.js";
import pgService from "../services/pg.services.js";

export default class Server{

    constructor(){
        this.app = express();
        this.port = exports.port;
    }

    async connectionDB(){
        new pgService();
    }

    middleware(){
        this.app.use(bodyParser.json());
    }

    route(){
        this.app.use(router)
    }

    runServer(){
        this.app.listen(this.port, ()=> {
            console.log("server Run");
        })
    }

    load(){
        this.connectionDB();
        this.middleware();
        this.route();
        this.runServer();
    }

}