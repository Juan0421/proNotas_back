import mongoose, { Types } from "mongoose";

let schema = new mongoose.Schema({
    notas:[{
        estudiante:{type:Types.ObjectId, ref:'estudiantes', required:true},
        profesor:{type:Types.ObjectId, ref:'profesores', required:true},
        materia:{type:Types.ObjectId, ref:'materias', required:true},
        nota:[{type:Number,required:true}],
        totalNotas:[{type:Number, required:false}]
    }],
    periodos:[{type:String, required:true}]
},{timestamps:true})
let collection = 'notas'
const Notas= mongoose.model(collection, schema)
export default Notas 