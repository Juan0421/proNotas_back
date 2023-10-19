import Profesor from '../../models/Profesor.js'
import User from '../../models/User.js'

let create = async(req, res, next)=>{
     req.body.is_active=true
   try {
        const user = await User.findOneAndUpdate({email:req.body.email_asignado}, {role:1}, {new:true})
        req.body.user_id = user._id
        let profesor = await Profesor.create(req.body)
        return res.status(201).json({
            success:true,
            Response:profesor
        })
    } catch (error) {
         console.log(error)
        return res.status(400).json({
            success:false,
            Response:"Bad request"
        })
       
    }
} 
export default create