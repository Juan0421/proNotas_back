import Estudiante from '../../models/Estudiante.js'
import User from '../../models/User.js'

let create = async(req, res, next)=>{
     req.body.is_active=true
   try {
    const user = await User.findOneAndUpdate({email:req.body.email_asignado}, {role:2}, {new:true})
        req.body.user_id = user._id
        let estudiante = (await Estudiante.create(req.body)).populate('grado_pertenece')
        return res.status(201).json({
            success:true,
            Response:estudiante
        })
    } catch (error) {
        next(error)
        return res.status(400).json({
            success:false,
            Response:"Bad request"
        })
    }
} 
export default create