import Materia from "../../models/Materia.js";

let update = async (req, res, next) => {
    try {
        const id = req.params.id
        let upd = await Materia.findByIdAndUpdate({_id:id},{nombre:req.body.nombre,descripcion:req.body.descripcion}, {new:true})
        if (upd) {
            return res.status(200).json({
                status: 200,
                success: true,
                Response: upd
            })
        } 
    } catch (error) {
        return res.status(400).json({
            status: 400,
            success: false,
            Response: 'bad request'
        })
        next()
    }

}
export default update
