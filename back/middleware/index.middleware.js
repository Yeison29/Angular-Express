import { Router } from "express";
import { verifyToken } from "./token.middleware.js"; 

const router  = Router();

const generalRoute = [
    {path : '/producto' , route : verifyToken}
];

generalRoute.forEach((route)=>{
    router.use(route.path  , route.route);
})

export default router;