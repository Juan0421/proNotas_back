import Estudiante from "../../models/Estudiante.js";

const getEstudianteByUser_id= async (req, res) => {
    try {
        const estudiante = await Estudiante
            .findOne({user_id:req.params.id})
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
export default getEstudianteByUser_id