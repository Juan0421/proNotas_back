import Notas from "../../models/Notas.js";
import Estudiante from "../../models/Estudiante.js";
import Profesor from '../../models/Profesor.js'
let create = async (req, res, next) => {
    try {
        const profesor = await Profesor.findOne({user_id:req.user.id})
        req.body.profesor_id = profesor._id;
        const id_materia = req.params.m_id;
        req.body.materia_id = id_materia;

        const notaExistente = await Notas.findOne({
            estudiante_id: req.body.estudiante_id,
            materia_id: id_materia,
            periodo_id: req.body.periodo_id
        });

        if (notaExistente) {
            // Si la nota ya existe para el estudiante, la actualizas
            notaExistente.nota.push(req.body.nota);
            const notaActualizada = await notaExistente.save();

            if (notaActualizada) {
                return res.status(200).json({
                    status: 200,
                    success: true,
                    Response: 'Nota actualizada'
                });
            }
        } else {
            // Si no existe una nota para el estudiante, materia y periodo, crea una nueva nota
            const nuevaNota = await Notas.create({
                estudiante_id: req.body.estudiante_id,
                profesor_id: req.body.profesor_id,
                materia_id: req.body.materia_id,
                nota: [req.body.nota], // Inserta la nota como un array de un solo número
                periodos: req.body.periodos,
                periodo_id: req.body.periodo_id
            });

            const estudianteConNotas = await Estudiante.findById(req.body.estudiante_id)
            estudianteConNotas.notas.push(nuevaNota._id)
            estudianteConNotas.save()

            if (nuevaNota) {
                return res.status(201).json({
                    status: 201,
                    success: true,
                    Response: nuevaNota,
                    estudiante: estudianteConNotas
                });
            }
        }

        return res.status(400).json({
            status: 400,
            success: false,
            Response: 'Bad request'
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

export default create;
