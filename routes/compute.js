var express = require('express')

var router = express.Router();

router.get('/', (req, res) => {
    let ran = Math.floor(Math.random() * 100) + 1;
    let data = req.query.x;
    console.log(data, ran);
    res.send('math.log2(' + ran + ') is :' + Math.log2(ran) + '  math.cosh(' + ran + ') is :' + Math.cosh(ran) +
     '     math.floor(' + ran + ') is :' + Math.floor(ran)
    );
})

module.exports = router