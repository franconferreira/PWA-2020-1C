const express = require('express');
const router = express.Router();

router.post('/',async(req,res)=> {
    try {
        console.log(req.body);
        // auth por JWT
        res.json({})
    } catch ( error ){
        res.sendStatus(500)
    }
})

module.exports = router;