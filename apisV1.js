const express = require('express');
var routesV1 = express.Router();

routesV1.get('/', function(req, res) {
	res.json({ message: 'ROUTESV1 WORKS !' });
})

var messagesRoutes = require('./messagesRoute');
routesV1.use('/messages', messagesRoutes);