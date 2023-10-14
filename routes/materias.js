import express  from 'express';
const router = express.Router();
import create from '../controllers/materias/create.js';
import read from '../controllers/materias/read.js';
import update from '../controllers/materias/updateById.js';
import deleteById from '../controllers/materias/deleteById.js';
import get_one from '../controllers/materias/get_one.js';
import passport from 'passport';


router.get('/', passport.authenticate('jwt', {session:false}), read )
router.post('/create',passport.authenticate('jwt', {session:false}) ,create)
router.put('/:id',passport.authenticate('jwt', {session:false}), update )
router.delete('/:id',passport.authenticate('jwt', {session:false}), deleteById)
router.get('/:id',passport.authenticate('jwt', {session:false}), get_one)
export default router