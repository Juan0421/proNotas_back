import express from 'express'
const router = express.Router();
import router_usuarios from './users.js'
import router_estudiantes from './estudiantes.js'
import router_materias from './materias.js'
import router_profesores from './profesor.js'
import router_notas from './notas.js'
import router_grados from './grado.js'
import router_periodos from './periodos.js'
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/users', router_usuarios)
router.use('/estudiantes', router_estudiantes)
router.use('/materias', router_materias)
router.use('/profesores', router_profesores)
router.use('/notas', router_notas)
router.use('/grados', router_grados)
router.use('/periodos', router_periodos)

export default router
