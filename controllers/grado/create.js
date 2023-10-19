import Grado from '../../models/Grado.js'

let create = async (req, res, next) => {
    try {
        let grado = await Grado.create(req.body)
        if (grado) {
            return res.status(201).json({
                success: true,
                Response: grado
            })
        }

    } catch (error) {
        next(error)
        return res.status(400).json({
            success: false,
            Response: "Bad request"
        })
    }
}
export default create