/*Tarea Modulo 4 Unidad 3*/
var express = require('express');
var router = express.Router();

/* GET home page. */
router.route('/tarea')
.get(function(req, res, next) {
  res.render('index', { title: 'Tarea M4U3' });
})
.post(function(req, res){
  res.send('Esto es un POST :)');
})
.put(function(req, res){
  res.send('Esto es un PUT :)');
});


/*Tarea Modulo 4 Unidad 4*/

router.get('/', function(req, res, next) {
  res.render('indexTareaUnidad4', { 
    titulo: 'Tarea M4U4',
    lista: ['manzanas', 'pera', 'naranjas'],
    activado: true,
    cantidad: 100});
});

module.exports = router;

