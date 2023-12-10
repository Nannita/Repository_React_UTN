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






/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Tarea M4U3' });
});

router.post('/',function(req, res){
  res.send('Esto es un POST');
});

router.put('/',function(req, res){
  res.send('Esto es un PUT');
});*/

module.exports = router;

