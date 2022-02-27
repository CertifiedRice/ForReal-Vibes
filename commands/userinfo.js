const Discord = require('discord.js');
const botsettings = require('../botsettings.json');
const colorEmbed = require('../entities/color.json');
const av = require('../entities/images.json');

module.exports.run = async (client, message, args) =>
{
    try
    {
        let prefix = botsettings.prefix;

        let cmd = message.content.toLowerCase().split(`${prefix}userinfo`);

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
                .addField('Username', message.author.username)
                .addField('Joined on', message.member.joinedAt)
                .addField('Account created on', message.author.createdAt)
                .addField('Nickname', message.member.nickname)
                .addField('Roles', message.member.roles.cache.map(roles => roles.name).join(', '))
                .addField('Permissions', message.member.permissions.toArray().join(', '))
                .setFooter('UserId: ' + message.author.id)


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
    name: 'userinfo',
    description:  'user information',
    usage: '+userinfo',
    accessableby: 'Members',
    aliases: []
}