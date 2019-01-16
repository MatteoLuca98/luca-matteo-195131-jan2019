const express = require('express');
var routesV1 = express.Router();

routesV1.get('/', function(req, res) {
	res.json({ message: 'ROUTESV1 WORKS !' });
})

var roomRoutes = require('./roomRoutes');
routesV1.use('/rooms', roomRoutes);

var messageRoutes = require('./messageRoute');
routesV1.use('/rooms/messages', messageRoutes);

var userRoutes = require('./userRoutes');
routesV1.use('/user', userRoutes);