import mongoose, { Types } from 'mongoose'

let schema = new mongoose.Schema({
    nombre:{type:String, required:true},
    apellido:{type:String, required:true},
    doc_identidad:{type:String, required:true},
    is_active:{type:Boolean, required:true},
    materias:{type: [Types.ObjectId], ref:'materias', required:true},
    grados:{type: [Types.ObjectId], ref:'grados', required:true},
    user_id:{type:Types.ObjectId, ref:'users', required:true},
},{
    timestamps:true
})
const collection = 'profesores'
const Profesor = mongoose.model(collection, schema)

export default Profesor 