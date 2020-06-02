const express = require('express');
const router = express.Router();

router.post('/new',async(req,res)=> {
    try {
        console.log(req.body);
        res.json({heroes_transaction : 'ok'});
    } catch (error) {
        res.sendStatus(500);
    }
})

module.exports = router;