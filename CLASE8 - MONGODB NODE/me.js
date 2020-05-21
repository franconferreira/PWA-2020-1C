var express = require('express');
var router = express.Router();
const meModel = require('./../models/meModel');

router.get('/get', async(req,res,next)=> {
	try {
		let data = await meModel.getPersonalInfo();
		res.json({status : true, data : data})
	} catch(error) {
		res.json({status : false})
	}
})

module.exports = router;
