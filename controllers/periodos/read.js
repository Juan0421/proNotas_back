import Periodo from "../../models/Periodo.js";

const read = async (req, res) => {
    try {
        const periodos = await Periodo.find()
        if (periodos) {
            return res.status(200).json({
                status: 200,
                success: true,
                Response: periodos
            })
        }else{
            return res.status(400).json({
                status: 400,
                success: false,
                Response: 'Bad Request'
            })
        }
    } catch (error) {
        return res.status(500).json({
            status: 500,
            success: true,
            Response: 'Internal Server Error'
        })
    }
}
export default read