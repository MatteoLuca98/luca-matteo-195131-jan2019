var uniqid = require('uniqid');

var roomTable = global.roomTable

if ( roomTable == null ){
    roomTable = [];
}else{
    roomTable = ['main','sports'];
}

module.exports = roomTable;