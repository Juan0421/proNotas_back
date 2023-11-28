import Notas from '../../models/Notas.js';

const notaFinal = async (req, res) => {
    try {
        const notas = req.body.notaFinal;


        const updates = await Promise.all(notas.map(async (nota) => {
            try {
                return await Notas.findByIdAndUpdate(nota.id, { promedio: nota.promedio });
            } catch (updateError) {
                console.error(`Error al actualizar la nota ${nota.id}: ${updateError.message}`);
                throw updateError;
            }
        }));
        const success = updates.some(update => update !== null);

        if (success) {
            return res.status(200).json({
                Response: 'Nota final asignada con éxito',
            });
        } else {
            return res.status(400).json({
                Response: 'Error al asignar notas',
            });
        }
    } catch (error) {
        return res.status(400).json({
            Response: 'Error al asignar notas',
        });
    }
};

export default notaFinal;
