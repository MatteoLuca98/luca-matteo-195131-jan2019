const express = require('express');
var routesV1 = express.Router();

routesV1.get('/', function(req, res) {
	res.json({ message: 'ROUTESV1 WORKS !' });
})

var roomsRoutes = require('./roomsRoutes');
routesV1.use('/rooms', roomsRoutes);

var messagesRoutes = require('./messagesRoute');
routesV1.use('/rooms/messages', messagesRoutes);
