
import pgService from "../services/pg.services.js"

export const getProducto = async (req, res ) => {

    res.json({
        success: true,
        msg: 'mensaje',
        data: getProductoModel()
    })
}