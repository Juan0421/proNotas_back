import express  from 'express';
const router = express.Router();
import create from '../controllers/profesor/create.js';
import read from '../controllers/profesor/read.js';
import update from '../controllers/profesor/updateP.js';
import deleteById from '../controllers/profesor/deleteById.js';
import get_one from '../controllers/profesor/get_one.js';
import passport from 'passport';


router.get('/', passport.authenticate('jwt', {session:false}), read )
router.post('/new',passport.authenticate('jwt', {session:false}) ,create)
router.put('/:id',passport.authenticate('jwt', {session:false}), update )
router.delete('/:id',passport.authenticate('jwt', {session:false}), deleteById)
router.get('/:id',passport.authenticate('jwt', {session:false}), get_one)
export default router