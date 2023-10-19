import mongoose, { Types } from "mongoose";

let schema = new mongoose.Schema({
    estudiante_id: { type: Types.ObjectId, ref: 'estudiantes', required: true },
    profesor_id: { type: Types.ObjectId, ref: 'profesores', required: true },
    materia_id: { type: Types.ObjectId, ref: 'materias', required: true },
    nota: { type: [Number], required: true, },

    periodos: [{ type: String, required: true }]
}, { timestamps: true })
let collection = 'notas'
const Notas = mongoose.model(collection, schema)
export default Notas 