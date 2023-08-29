import { Router } from "express";
import Producto from "./producto.routes.js";

const router  = Router();

const generalRoute = [
    {path : '/producto' , route : Producto}
];

generalRoute.forEach((route)=>{
    router.use(route.path  , route.route);
})

export default router;