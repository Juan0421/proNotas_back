import Estudiante from "../../models/Estudiante.js";

const getById = async (req, res) => {
    try {
        const estudiante = await Estudiante
            .findById(req.params.id)
            .populate('grado_pertenece') // Población de la propiedad grado_pertenece
            .populate({
                path: 'notas',
                populate: {
                    path: 'materia_id periodo_id'
                }
            });
        if (estudiante) {
            return res.status(200).json({
                status: 200,
                success: true,
                Response: estudiante
            })
        }
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            status: 400,
            success: true,
            Response: 'Bad Request'
        })

    }
}
export default getById