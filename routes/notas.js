import express  from 'express';
const router = express.Router();
import create from '../controllers/notas/create.js';
import read from '../controllers/notas/read.js';
import updateNotes from '../controllers/notas/updateById.js';
import deleteById from '../controllers/notas/deleteById.js';
import get_one from '../controllers/notas/get_one.js';
import profesorChecker from '../middlewares/profesorChecker.js';
import notaFinal from '../controllers/notas/notaFinal.js';
import passport from 'passport';


router.get('/', passport.authenticate('jwt', {session:false}), read )
router.post('/new/:m_id',passport.authenticate('jwt', {session:false}) ,create)
router.put('/:id',passport.authenticate('jwt', {session:false}),profesorChecker,  updateNotes )
router.delete('/:id',passport.authenticate('jwt', {session:false}), deleteById)
router.get('/:id',passport.authenticate('jwt', {session:false}), get_one)
router.patch('/final',passport.authenticate('jwt', {session:false}), notaFinal)
export default router