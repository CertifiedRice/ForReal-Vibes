const Discord = require('discord.js');
const botsettings = require('../botsettings.json');
const colorEmbed = require('../entities/color.json');
const av = require('../entities/images.json');

module.exports.run = async (client, message, args) =>
{
    try
    {
        let prefix = botsettings.prefix;

        let cmd = message.content.toLowerCase().split(`${prefix}serverinfo`);

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
                .setColor("#ff0000")
                .setThumbnail(message.guild.iconURL())
                .setTitle(`${message.guild.name} Server Information`)
                .addField('Server Name:', `${message.guild.name}`, true)
                .addField(`Text Channels:`, `${message.guild.channels.cache.filter(channel => channel.type === 'text').size}`, true)
                .addField(`Owner: `, `${message.guild.owner}`, true)
                .addField(`Voice channels: `, `${message.guild.channels.cache.filter(channel => channel.type === 'voice').size}`, true)
                .addField(`Members: `, `${message.guild.memberCount}`, true)
                .addField(`Roles: `, `${message.guild.roles.cache.size}`, true)
                .addField('Server ID:', `${message.guild.id}`, true)
                .addField('Server Region:', `${message.guild.region}`, true)
                .addField('Server Created At:', `${message.guild.createdAt}`, true)

            message.channel.send(embed);
        }
    }
    catch (err)
    {
        console.log(err);
        message.channel.send('Something went wrong.');
    }
}

module.exports.config = {
    name: 'serverinfo',
    description:  'server information',
    usage: '+serverinfo',
    accessableby: 'Members',
    aliases: []
}