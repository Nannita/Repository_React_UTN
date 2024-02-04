var express = require('express');
var router = express.Router();
var cloudinary = require('cloudinary').v2;
var novedadesModel = require ('../models/novedadesModel');

router.get('/novedades', async function(req, res, next){
    let novedades = await novedadesModel.getNovedades();

    novedades = novedades.map(novedad => {
        if (novedad.img_id) {
            const imagen = cloudinary.url(novedad.img_id, {
               width: 960,
               height: 200,
               crop: 'fill'
            });
            return {
                ...novedad,
                imagen
            }
        }else {
            return {
                ...novedad,
                imagen: ''
            }
        }
    });
    res.json(novedades);
})

module.exports = router;