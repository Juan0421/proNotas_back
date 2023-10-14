import User from '../../models/User.js'
import crypto from 'crypto'
import bcryptjs from 'bcryptjs'

let signUp = async(req, res, next) =>{
    req.body.is_online = false
    req.body.role = 0
    req.body.is_verified = true
    req.body.verify_code = crypto.randomBytes(10).toString('hex')
    req.body.password = bcryptjs.hashSync(req.body.password, 10)
    try {
        await User.create(req.body)
        return res.status(201).json({
            status:201,
            success:true,
            Response:'User registered!'
        })
    } catch (error) {
       return res.status(400).json( { Response: 'bad request' } )
    }
}

export default signUp
