const express = require('express');
const Message = require('../rooms/message');

const messageRoutes = express.Router(); 

messageRoutes.route('/')

//get all messages
.get(async function(req, res) {
    var message = new Message();
    message = await message.find(req.query)
    if(message == undefined)
        res.status(400).send('Error, something went wrong')

    res.status(200).json(message)
})

//create a message
.post(async function(req, res){
    var message = new Message()
    message.id = req.body.id
    message.text = req.body.text
    room.id = req.body.id
    user.id = req.body.id
    if(message.text === null){
        res.status(400).send('Error 400: test is null')
    }else{
        Message.addMessage(message)
        res.status(201).send('Success: message inserted')
    }
})

//it is to prevent a bug
.delete(async function(req, res){
    res.status(400).send("Error 400: no parameters given")
})
//it is to prevent a bug
.put(async function(req, res){
    res.status(400).send("Error 400: no parameters given")
})

module.exports = messageRoutes;