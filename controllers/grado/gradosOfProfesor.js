import Profesor from "../../models/Profesor.js";
import Grado from "../../models/Grado.js";

const gradosOfProfesor = async (req, res) => {
    try {
        const arrayGradosAsignados = [];
        const materiasProfesor = await Profesor.findOne({ user_id: req.user.id }).populate('grados');

        await Promise.all(materiasProfesor.grados.map(async (grado) => {
            const gradoEncontrado = await Grado.findById(grado._id);
            arrayGradosAsignados.push(gradoEncontrado);
        }));

        // Puedes enviar la respuesta al cliente si es necesario
        res.status(200).json({ Response: arrayGradosAsignados });
    } catch (error) {
        console.error(error);
        // Enviar una respuesta de error al cliente
        res.status(500).json({ error: 'Hubo un problema al obtener los grados del profesor.' });
    }
};

export default gradosOfProfesor;
