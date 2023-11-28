import mongoose from "mongoose";

const schema = new mongoose.Schema({
    numero_p:{type:Number, required:true},
    valor_p:{type:Number, required:true}
}, {timestamps:true})

let collection = 'periodos'
const Periodo = mongoose.model(collection, schema)

export default Periodo