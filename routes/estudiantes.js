import express  from 'express';
const router = express.Router();
import create from "../controllers/estudiantes/create.js";
import read from '../controllers/estudiantes/read.js';
import updateGrado from '../controllers/estudiantes/updateGrado.js';
import inactiveEstudent from '../controllers/estudiantes/inactiveEstudent.js';
import updateStatus from '../controllers/estudiantes/updateStatus.js';
import passport from 'passport';
router.get('/', read)
router.put('/:id', updateStatus)
router.post('/new',passport.authenticate('jwt', {session:false}), create)
router.get('/',passport.authenticate('jwt', {session:false}), read)
router.patch('/:id',passport.authenticate('jwt', {session:false}), updateGrado )
router.patch('/active/:id',passport.authenticate('jwt', {session:false}), inactiveEstudent)


export default router

