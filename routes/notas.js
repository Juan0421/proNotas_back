import express  from 'express';
const router = express.Router();
import create from '../controllers/notas/create.js';
import read from '../controllers/notas/read.js';
import update from '../controllers/notas/updateById.js';
import deleteById from '../controllers/notas/deleteById.js';
import get_one from '../controllers/notas/get_one.js';
import passport from 'passport';


router.get('/', passport.authenticate('jwt', {session:false}), read )
router.post('/create',passport.authenticate('jwt', {session:false}) ,create)
router.put('/:id',passport.authenticate('jwt', {session:false}), update )
router.delete('/:id',passport.authenticate('jwt', {session:false}), deleteById)
router.get('/:id',passport.authenticate('jwt', {session:false}), get_one)
export default router