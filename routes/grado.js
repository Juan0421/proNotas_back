import express  from 'express';
const router = express.Router();
import create from "../controllers/grado/create.js";
import read from '../controllers/grado/read.js';
import updateGrado from '../controllers/grado/updateGrado.js';
import passport from 'passport';
router.post('/new', create)
router.get('/',passport.authenticate('jwt', {session:false}), read)
router.patch('/:id',passport.authenticate('jwt', {session:false}), updateGrado )
/* router.patch('/active/:id',passport.authenticate('jwt', {session:false}), inactiveEstudent) */


export default router
