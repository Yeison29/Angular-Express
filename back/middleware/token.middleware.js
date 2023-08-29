import jwt from "jsonwebtoken"
import { exports } from "../config/default.js"

export const verifyToken = async (req, res, next)=>{

    const token = req.headers["authorization"];

    if(!token){
        return res.status(401).send({
            msn:"Autorizaciòn requerida"
        })
    }

    const partition = token.split(" ");

    if(partition[0] !== 'Bearer'){
        return res.status(401).send({
            msn:"Autorizaciòn requerida"
        })
    }

    jwt.verify(partition[1], exports.key, (err, decoded)=>{
        if(err){
            return res.status(401).send({
                msn:"Autorizaciòn requerida"
            })
        }
        next();
    })

}