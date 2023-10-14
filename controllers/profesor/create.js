import Profesor from '../../models/Profesor.js'
import User from '../../models/User.js'

let create = async(req, res, next)=>{
     req.body.user_id=req.user._id
     req.body.is_active=true
   try {
        let Profesor = await Profesor.create(req.body)
        await User.findByIdAndUpdate(req.user._id, {role:1}, {new:true})
        return res.status(201).json({
            success:true,
            Response:Profesor
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