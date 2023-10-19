import Notas from "../../models/Notas.js";
import Estudiante from "../../models/Estudiante.js";

let create = async (req, res, next) => {
    try {
        req.body.profesor_id = req.user._id;
        const id_materia = req.params.m_id;
        req.body.materia_id = id_materia;

        const notaExiste = await Notas.findOne({ materia_id: id_materia });

        if (notaExiste) {
            // Agrega la nueva nota al array existente
            notaExiste.nota.push(req.body.nota);

            // Actualiza la nota en la base de datos
            const notaActualizada = await notaExiste.save();

            const estudiante = await Estudiante.findById(req.body.estudiante_id).populate('notas');

            if (estudiante.notas.length !== 0) {
                // Si el estudiante ya tiene notas, simplemente agrega la nueva nota al array
                estudiante.notas.push(notaExiste._id);
                await estudiante.save(); // Guarda el estudiante actualizado

                if (notaActualizada) {
                    return res.status(200).json({
                        status: 200,
                        success: true,
                        Response: 'Nota actualizada',
                        estudiante: estudiante
                    });
                }
            } else {
                // Si el estudiante no tiene notas aún, crea un nuevo array de notas
                estudiante.notas = [notaExiste._id];
                await estudiante.save(); // Guarda el estudiante actualizado

                if (notaActualizada) {
                    return res.status(200).json({
                        status: 200,
                        success: true,
                        Response: 'Nota actualizada',
                        estudiante: estudiante
                    });
                }
            }
        } else {
            // Si no existe una nota para la materia, crea una nueva
            const nuevaNota = await Notas.create({
                estudiante_id: req.body.estudiante_id,
                profesor_id: req.body.profesor_id,
                materia_id: req.body.materia_id,
                nota: [req.body.nota], // Inserta la nota como un array de un solo número
                periodos: req.body.periodos
            });

            const estudianteConNotas = await Estudiante.findByIdAndUpdate(
                req.body.estudiante_id,
                { notas: [nuevaNota._id] }, // Crea un nuevo array de notas con la nueva nota
                { new: true }
            ).populate('notas');

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
