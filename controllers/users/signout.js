import User from "../../models/User.js"

const signout = async (req, res, next)=>{
try{
    await User.findOneAndUpdate(
        {email: req.user.email},
        {is_online: false},
        {new:true}
    )
    return res.json({
        status:200,
        Response:'Offline'
    })
}catch(error){
    next(error)
}
}
export default signout