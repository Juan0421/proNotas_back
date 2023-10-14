import User from '../models/User.js';

async function accountSignIn(req, res, next) {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            req.user = {
                id: user._id,
                email: user.email,
                password: user.password,
                role: user.role
            };
            return next();
        }
        return res.status(400).json({
            status: 400,
            success: false,
            Response: 'User does not exist'
        });
    } catch (error) {
        // Manejar el error aquí
        return res.status(500).json({
            status: 500,
            success: false,
            Response: 'Internal Server Error'
        });
    }
}

export default accountSignIn;