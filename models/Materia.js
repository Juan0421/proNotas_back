import mongoose from "mongoose";

let schema = new mongoose.Schema({
    nombre:{type:String, required:true},
    descripcion:{type:String, required:true}
},{timestamps:true})
let collection = 'materias'
let Materia= mongoose.model(collection, schema)
export default Materia 