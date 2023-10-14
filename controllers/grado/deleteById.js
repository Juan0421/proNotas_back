import Grado from "../../models/Grado.js";

let deleteById = async (req, res, next) => {
    try {
        const id = req.params.id;
        let deletedOne = await Grado.findByIdAndDelete({_id:id})
        if (deletedOne) {
            return res.status(200).json({
                status: 200,
                success: true,
                Response: "Grado deleted successfully"
            });
        }
    } catch (error) {
        return res.status(400).json({
            status: 400,
            success: false,
            Response: "Cannot find grado"
        });
    }
};

export default deleteById;