const express = require('express');
const router = express.Router();
const generator = require('generate-password'); // incluir el modulo de generacion de pwd
const sha1 = require('sha1');
const usuariosModel = require('./../../models/adminModel/usuariosModel');
const mailer = require('./../../utils/mailer');
const uuid = require('node-uuid');
router.post('/', async(req,res)=> {
    try {
        let password = generator.generate({length : 10, numbers : true}); // npmjs
        // ^\d+(.*)\d+$
        // password -> campo > 40 caracteres
        let uuid_route = uuid();
        const user = {
            // cuit/cuil
            usuario : req.body.nombre_usuario, // CUIT/CUIL
            password : sha1(password),
            id_region : req.body.id_region,
            permiso : req.body.permiso,
            uuid : uuid_route
        }
        const result = await usuariosModel.createNewUser(user);
        // result.insertId -> obtenemos el id de el insert (primary_key)
        const user_info = {
            id_usuario : result.insertId,
            nombre : req.body.nombre,
            apellido : req.body.apellido,
            documento : req.body.documento,
            direccion : req.body.direccion,
            telefono : req.body.telefono,
            mail : req.body.mail
        }
        let resultDetails = await usuariosModel.addPersonalInfo(user_info);
        // URL_SERVER : http://localhost:3000
        let html = `
            <html>
                <body>
                    <h4>Usuario : ${user.usuario}</h4>
                    <h4>Pasword : ${password}</h4>
                    <a href="${process.env.URL_SERVER}/verify/${uuid_route}">Link de activación</a>
                </body>
            </html>
        `

        // localhost:3000/verify/uuid
        let mail = await mailer.sendRegisterInfo(user_info.mail,html)
        res.json({message : 'Usuario creado exitosamente', id : mail})
    } catch(error) {
        console.log(error);
        res.sendStatus(500); // envia un 500 al cliente
    }
})


module.exports = router;