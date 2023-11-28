import mongoose,  {Types} from "mongoose";

let schema = new mongoose.Schema({
    num_grado:{type:Number, required:true}
},
{timestamps:true})
let collection = 'grados'
let Grado = mongoose.model(collection, schema)
export default Grado 