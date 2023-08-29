import { checkSchema } from "express-validator"

export const productoValidator = checkSchema({
    nombre: {
        notEmpty : true,
        errorMessage : "El nombre es requerido",
        matches : {
            options: /[0-9]/
        }
    }
},["query"]);