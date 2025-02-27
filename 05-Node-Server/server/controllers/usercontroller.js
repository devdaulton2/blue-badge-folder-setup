let express = require('express');
let router = express.Router();
let sequelize = require('../db');
let User = sequelize.import('../models/user.js');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');
// const router = require('express').Router()
// const User = require('../db').import('..models/user.js'
// )

router.post('/create', function (req, res){
    let userModel = {
    email: req.body.user.email,
    password: bcrypt.hashSync(req.body.user.password, 13),
    };
    User.create(userModel).then(function createSuccess(user) {
        let token = jwt.sign({id: user.id}, process.env.JWT_SUCCESS, {expiresIn: 60*60*24});
        let responseObject = {
            user: user,
            message: "User successfully created",
            sessionToken: token
        };
        res.json(responseObject);
    })
    .catch(function(err){
        res.status(500).json({error: err});
    });
});

//USER SIGNIN

router.post("/login", function(req, res) {
    User.findOne({where: {email: req.body.user.email} })
    .then(function loginSuccess(user) {
        if(user){
            bcrypt.compare(req.body.user.password, user.password, function (err, matches) {
                if (matches) {
            let token = jwt.sign({id: user.id}, process.env.JWT_SUCCESS, {expiresIn: 60 * 60 * 24})

            res.status(200).json({
                user: user,
                message: "User successfully logged in!",
                sessionToken: token
            })

            } else {
                res.status(502).send({error: "Login Failed"});
            }    
            });
            } else {
                res.status(500).json({error: "User does not exist"})
            }
        })
        .catch(function (err) {
        res.status(500).json({error: err});
    })
});

module.exports = router;