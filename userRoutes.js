const express = require('express');
const User   = require('../user');

const userRoutes = express.Router(); 

userRoutes.route('/')

//create a user
.post(async function(req, res){
    var user = new User()
    user.id = req.body.id
    user.name = req.body.name
    user.password = req.body.password
    if(user.name === undefined || user.password === undefined){
        res.status(403).send('Error 403: Not all parameters given')
    }else{
        user.addUser(user)
        res.status(201).send('Success: user inserted')
    }
})

module.exports = userRoutes;