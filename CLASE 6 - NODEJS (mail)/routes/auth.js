var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const fs = require('fs');
const userModel = require('../models/authModel');
const sha1 = require('sha1')
router.post('/', async (req, res, next) => {
    try {
        let user = req.body.user;
        let password = sha1(req.body.password);
        let result = await userModel.authUser(user,password);
        let signOptions = {
            expiresIn : "3h",
            algorithm : "RS256"
        }
        if(result.length > 0) {
            const privateKey = fs.readFileSync('./keys/private.pem','utf-8');
            let payload = {
                id : result[0].id, // id del usuario
                id_permiso : result[0].permiso // id permiso
            }
            console.log(`Payload a enviar `);
            console.log(payload)
            let usuario = {user : result[0].usuario}
            const token = jwt.sign(payload,privateKey,signOptions);
            res.json({usuario, JWT : token})
        } else {
            res.status(401).json({message : 'unauthorized'})
        }
    } catch(error) {
        console.log(error)
        res.status(500).json({status : false, message : 'Error'})
    }
});

module.exports = router;
