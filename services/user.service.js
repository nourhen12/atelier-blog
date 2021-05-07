const User = require('../models/user-shema');

async function addUser(_user) {
    try {
        let result = await User.create(_user);
       return ({ message: "user added succssfullty", payload: result });

    } catch (error) {
        return ({ message: "Add user failed", payload: error });
    }

}

async function getAllUser() {
    try {
        let users = await User.find();
        return message = { items: users, total: users.legth };
        

    } catch (error) {
        return ({ message: "Get All users Fail", payload: error });
    }
}

module.exports =() => {
    return (
        {
            addUser: addUser,
            getAllUser: getAllUser
        });
}