var uniqid = require('uniqid');

var userTable = global.userTable
if ( userTable == null )
    userTable = [];

class User{
    //adding a user
    static async addUser(criterias){
        if(criterias.id===undefined){
            criterias.id = uniqid();
        }  
        userTable.push(criterias);
    }
}

module.exports = User;