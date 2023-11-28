import Periodo from "../../models/Periodo.js";

const create = async(req, res)=>{

    try {
        const periodo = await Periodo.create(req.body)

        if (periodo) {
            return res.status(201).json({
                status:201,
                success:true,
                periodos:periodo
            })
        }else{
            return res.status(400).json({
                status:400,
                success:false,
                periodos:'No se ha podido crear el Periodo'
            })
        }
    } catch (error) {
        return res.status(500).json({
            status:500,
            success:false,
            periodos:'Internal Server Error'
        })
    }
}
export default create