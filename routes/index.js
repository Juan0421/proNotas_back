import express from 'express'
const router = express.Router();
import router_usuarios from './users.js'
import router_estudiantes from './estudiantes.js'
import router_materias from './materias.js'
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/users', router_usuarios)
router.use('/students', router_estudiantes)
router.use('/materias', router_materias)

export default router
