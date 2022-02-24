const botsettings = require('../botsettings.json');
const Discord = require('discord.js');
const colorEmbed = require('../entities/color.json');
const av = require('../entities/images.json');

module.exports.run = async (client, message, args) => 
{
    try
    {
        let prefix = botsettings.prefix;

        let cmd = message.content.toLowerCase().split(`${prefix}membercount`);
    
        if (cmd)
        {
            var a = [];
            a.push(cmd.slice(prefix));
            var again = a.slice(' ').shift();
        }
        if (again[1] || again[1] != '') 
        {
            message.reply('this doesn\'t support argument.');
        }
        else
        { 
            var embed = new Discord.MessageEmbed()
                .setColor(colorEmbed.color)
                .setAuthor('membercount ✧', av.avatarBot)
                .setDescription(`The server has ${client.guilds.cache.first().memberCount} members!`)

            message.channel.send(embed);
        }
    }
    
    catch (err)
    {
        console.log(err);
        message.channel.send('Something went wrong.');
    }
}

module.exports.config =
{
    name: 'membercount',
    description: 'show the number of members',
    usage: '/membercount',
    accessableby: 'Members',
    aliases: []
}