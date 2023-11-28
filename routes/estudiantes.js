import express  from 'express';
const router = express.Router();
import create from "../controllers/estudiantes/create.js";
import read from '../controllers/estudiantes/read.js';
import updateGrado from '../controllers/estudiantes/updateGrado.js';
import inactiveEstudent from '../controllers/estudiantes/inactiveEstudent.js';
import updateStatus from '../controllers/estudiantes/updateStatus.js';
import getById from '../controllers/estudiantes/getById.js';
import getEstudianteByUser_id from '../controllers/estudiantes/getEstudianteByuser_id.js';
import passport from 'passport';
router.get('/',passport.authenticate('jwt', {session:false}), read)
router.get('/calificaciones/:id', getEstudianteByUser_id)
router.put('/:id', updateStatus)
router.get('/:id', getById)
router.post('/new',passport.authenticate('jwt', {session:false}), create)
router.get('/',passport.authenticate('jwt', {session:false}), read)
router.patch('/:id',passport.authenticate('jwt', {session:false}), updateGrado )
router.patch('/active/:id',passport.authenticate('jwt', {session:false}), inactiveEstudent)


export default router

