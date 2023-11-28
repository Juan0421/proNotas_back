import express  from "express";
const router = express.Router()
import create from "../controllers/periodos/create.js";
import read from "../controllers/periodos/read.js";
router.post('/new', create )
router.get('/', read)

export default router