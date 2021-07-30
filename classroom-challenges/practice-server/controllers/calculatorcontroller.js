let router = require("express").Router();
// localhhost:3000/calculator/add

router.post("/add", function(req, res){
    let number1 = req.body.num1
    let number2 = req.body.num2

    let  total = number1 + number2

    res.json({total: total});
});

module.exports = router;