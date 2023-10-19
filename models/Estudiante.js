import mongoose, { Types } from "mongoose";

const schema = new mongoose.Schema({
    nombre:{type:String, required:true},
    apellido:{type:String, required:true},
    doc_identidad:{type:String, required:true},
    grado_pertenece:{type:Types.ObjectId, ref:'grados' ,required:true},
    notas:{type:[Types.ObjectId], ref:'notas'},
    is_active:{type:Boolean, required:true},
    user_id:{type:Types.ObjectId, ref:'users', required:true}
},{timestamps:true})

let collection = 'estudiantes'
let Estudiate = mongoose.model(collection, schema)

export default Estudiate
