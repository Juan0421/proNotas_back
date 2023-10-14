import Estudiante from '../../models/Estudiante.js'
import User from '../../models/User.js'

let create = async(req, res, next)=>{
     req.body.user_id=req.user._id
     req.body.is_active=true
   try {
        let estudiante = await Estudiante.create(req.body)
        await User.findByIdAndUpdate(req.user._id, {role:2}, {new:true})
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