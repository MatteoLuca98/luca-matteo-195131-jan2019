var uniqid = require('uniqid');

var messageTable = global.messageTable

if ( messageTable == null )

    messageTable = [];

class Message{

    //adding a message

    static async addMessage(criterias){

        if(criterias.id===undefined){

            criterias.id = uniqid();

        }  

      messageTable.push(criterias);

    }

}
module.exports = Message;
