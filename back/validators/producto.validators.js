import { checkSchema } from "express-validator"

export const productoValidator = checkSchema({
    nombre: {
        notEmpty : true,
        errorMessage : "El nombre es requerido"
    }
},["query"]);