import { Router } from "express";
import Producto from "./producto.routes.js";
import Auth from "./auth.routes.js"

const router  = Router();

const generalRoute = [
    {path : '/producto' , route : Producto},
    {path : '/auth' , route: Auth}
];

generalRoute.forEach((route)=>{
    router.use(route.path  , route.route);
})

export default router;