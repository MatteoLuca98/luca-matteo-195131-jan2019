const express = require('express');
const Room = require('../rooms');

const roomRoutes = express.Router(); 

roomRoutes.route('/')

//get all rooms
.get(async function(req, res) {
    var room = new Room();
    room = await message.find(req.query)
    if(room != 'main')
        res.status(400).send('Error, something went wrong')

    res.status(200).json(room)
})

//it is to prevent a bug
.delete(async function(req, res){
    res.status(400).send("Error 400: no parameters given")
})
//it is to prevent a bug
.put(async function(req, res){
    res.status(400).send("Error 400: no parameters given")
})

roomRoutes.route('/main');



module.exports = roomRoutes;

