import Notas from "../../models/Notas.js";

const updateNotes = async (req, res, next) => {
    try {
        
        req.body.profesor_id = req.profesor.id; 

        const notaId = req.params.id; // ID de la nota que se desea actualizar
        const newNotesArray = req.body.nota; // Nuevo array de notas proporcionado por el cliente

        // Encuentra la nota por su ID
        const notaExistente = await Notas.findById(notaId);

        if (!notaExistente) {
            return res.status(404).json({
                status: 404,
                success: false,
                Response: 'Nota no encontrada'
            });
        }
        // Actualiza el campo 'nota' con el nuevo array proporcionado por el cliente
        notaExistente.nota = newNotesArray;

        // Guarda la nota actualizada en la base de datos
        const notaActualizada = await notaExistente.save(); 

        return res.status(200).json({
            status: 200,
            success: true,
            Response: 'Notas actualizadas',
            updatedNote: notaActualizada
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: 500,
            success: false,
            Response: 'Internal Server Error'
        });
    }
};

export default updateNotes;

