var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('admin/novedades', {
        layout: 'admin/layout',
        usuario: req.session.nombre,
    });
});

// router.post('/', async (req, res, next) => {
//     try {

//         console.log(req.body)
//         var usuario = req.body.usuario; 
//         var password = req.body.password;
        
//         var data = await usuariosModel.getUserByUsernameAndPassword(usuario, password);
        
//         if (data != undefined) {
//             req.session.id_usuario = data.id;
//             res.redirect('/admin/novedades');
//         } else {
//             res.render('admin/login', {
//                 layout: 'admin/layout', 
//                 error: true
//             });
//         }
//     } catch (error) {
//         console.log(error);
//     }

// });

module.exports = router;