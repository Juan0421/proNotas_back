import Notas from "../models/Notas.js";
import Profesor from "../models/Profesor.js";
const profesorChecker = async (req, res, next) => {
    try {
        const profesor = await Profesor.findOne({user_id:req.user.id})
        const profesorFound = await Notas.findOne({ profesor_id: profesor._id })
        if (!profesorFound) {
            
            return res.status(400).json({
                status: 400,
                Response: 'Profesor not authorized for this action'
            });
        } else {
            req.profesor = {
                id:profesorFound._id
            }
            return next()

        }

    } catch (error) {
        return res.status(500).json({
            status: 500,
            Response: 'Internal Server Error'
        });
    }
}
export default profesorChecker