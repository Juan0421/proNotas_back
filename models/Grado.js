import {Schema,model, Types} from "mongoose";

let schema = new mongoose.Schema({
    num_grado:{type:Number, required:true},
    director_curso:{type:Types.ObjectId, ref:'profesores', required:true},
    materias:{type:Types.ObjectId, ref:'materias', required:true}
},
{timestamps:true})
let collection = 'grados'
let Grado = mongoose.model(collection, schema)
export default Grado 