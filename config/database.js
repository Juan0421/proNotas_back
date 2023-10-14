import mongoose from "mongoose";
import 'dotenv/config.js'
mongoose.set('strictQuery', false)
const conexion = process.env.CONECTION
mongoose.connect(process.env.CONECTION)
.then(()=>console.log('Conectado a mongo'))
.catch(err => console.warn(err)) 


