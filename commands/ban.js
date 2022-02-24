const Discord = require('discord.js');
const botsettings = require('../botsettings.json');


module.exports.run = async (client, message, args) => 
{
    try
    {
        if (!message.member.hasPermission('BAN_MEMBERS'))
        {
            message.reply('you don\'t have the permission to use that command!');
        }

        else
        {
            let User = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
        
            if (User) 
            {
                await User.ban();
                console.log(`\n${User} has been banned.`);
                message.channel.send(`${User} has been banned!`) // .then(sentMessage => sentMessage.delete({ timeout: 10000 }));;
            }
        }
    }

    catch (err)
    {
        console.log(err);
        message.reply('please enter a valid user.');
    }
}

module.exports.config =
{
    name: 'ban',
    description: 'Ban @user',
    usage: '+ban',
    accessableby: 'Administrators',
    aliases: []
}