const Command = require('../models/command-schema');

async function addCommand(commande) {
    try {
        let result = await Command.create(commande);
       return ({ message: " Command added succssfullty", payload: result });

    } catch (error) {
        return ({ message: "Add Command failed", payload: error });
    }

}

async function getAllCommand() {
    try {
        let commandes = await Command.find();
        let message = { items: commandes, total: commandes.legth }
        return message;

    } catch (error) {
        return ({ message: "Get All Commands Fail", payload: error });
    }
}

async function getOneCommand(id){
  
   try {
        let commande = await Command.findById({_id:id});
        let message = { items: commande}
        return message;

    } catch (error) {
        return ({ message: "Get Command Fail", payload: error });
    }
}

async function updateCommand(id,commande) {
  
    try {
        let updatedCommand = await Command.findByIdAndUpdate(id, commande);
       return ({ message: "Command updated succssfullty", payload: updatedCommand });

    } catch (error) {
        return ({ message: "update Command failed", payload: error });
    }

}

async function DeleteCommand(id) {
  
    try {
        let deletedCommand = await Command.deleteOne({_id:id});
       return ({ message: `Command with _id=${id} has deleted`, payload: deletedCommand });

    } catch (error) {
        return ({ message:  `Error to delete command with _id=${id}`, payload: error });
    }

}
module.exports =() => {
    return (
        {
            addCommand: addCommand,
            getAllCommand: getAllCommand,
            getOneCommand: getOneCommand,
            updateCommand: updateCommand,
            DeleteCommand: DeleteCommand
        });
}