const Discord = require('discord.js');
const botsettings = require('../botsettings.json');

module.exports.run = async (client, message, args) => 
{      
    const delMessage = async (pDeleteAmount) => 
    {
        message.channel.bulkDelete(pDeleteAmount, true).then( 
            message.channel.send(`Deleted ${pDeleteAmount} messages.`).then(sentMessage => sentMessage.delete({ timeout: 3000 })));
    }

    try 
    {
        let deleteAmount;

        if (message.deletable) 
        {
            message.delete();
        }

        if (!message.member.hasPermission("MANAGE_MESSAGES"))
        {
            message.reply("You do not have permissions to do that!").then(m => m.delete(5000));
        }

        else if (isNaN(args[0]) || parseInt(args[0]) <= 0) 
        {
            message.reply("Please enter a number!").then(m => m.delete(5000));
            console.log(message.content + ' does not have second args.');
        }

        else if (parseInt(args[0]) >= 100) 
        {
            deleteAmount = 99;

            delMessage(deleteAmount);
        }

        else 
        {
            deleteAmount = parseInt(args[0]);

            delMessage(deleteAmount);
        }
    }

    catch (err)
    {
        console.log(err);
        message.channel.send('Something went wrong.');
    }
}    
    

module.exports.config = {
    name: 'clear',
    description: 'clear the messages',
    usage: '/clear',
    accessableby: 'Administrators',
    aliases: ['c', 'purge']
}