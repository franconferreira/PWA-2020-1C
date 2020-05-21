var express = require('express');
var router = express.Router();
const usuariosModel = require('./../models/usuariosModel')
/* GET home page. */
router.get('/', async (req, res, next) => {

  let result = await usuariosModel.getUsers()
  console.log(result);

});

module.exports = router;
