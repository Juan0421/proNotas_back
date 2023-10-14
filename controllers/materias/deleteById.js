import Materia from "../../models/Materia.js";

let deleteById = async (req, res, next) => {
    try {
        const id = req.params.id;
        let deletedOne = await Materia.findByIdAndDelete({_id:id})
        if (deletedOne) {
            return res.status(200).json({
                status: 200,
                success: true,
                Response: "Materia deleted successfully"
            });
        }
    } catch (error) {
        return res.status(400).json({
            status: 400,
            success: false,
            Response: "Cannot find materia"
        });
    }
};

export default deleteById;