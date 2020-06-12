const express = require('express');
const router = express.Router();
const heroesModel = require('./../models/heroes');
const uuid = require('node-uuid');

router.get('/single/:id', async(req,res)=> {
    try {
        let result = await heroesModel.getHeroe(req.params.id);
        res.json({heroe : result});
    } catch (error) {
        console.log(error);
        res.sendStatus(500)
    }
})

router.get('/all', async(req,res)=> {
    try {
        let result = await heroesModel.getHeroes();
        res.json({heroes : result});
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})

router.post('/new',async(req,res)=> {
    try {
        let casa ="";
        req.body.casa == '1' ? casa =  'Marvel' : casa = 'DC';
        console.log(req.body);
        let obj = {
            id : uuid(),
            nombre : req.body.nombre,
            bio : req.body.bio,
            aparicion : req.body.aparicion,
            img : req.body.imagen,
            casa : casa,
            estado : true
        }
        let result = await heroesModel.createHeroe(obj);
        res.json({heroes_transaction : result});
    } catch (error) {
        res.sendStatus(500);
    }
})

router.put('/', async(req,res)=> {
    try {
        
    } catch (error) {
        res.sendStatus(500);
    }
})

module.exports = router;