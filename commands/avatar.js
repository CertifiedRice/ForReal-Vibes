const Discord = require('discord.js');
const botsettings = require('../botsettings.json');
const colorEmbed = require('../entities/color.json');
const av = require('../entities/images.json');

module.exports.run = async (client, message, args) =>
{
    let prefix = botsettings.prefix;

    let cmd = message.content.toLowerCase().split(`${prefix}avatar`);
    const user = message.mentions.users.first() || message.author

    try
    {
        if (cmd)
        {
            var embed = new Discord.MessageEmbed()
                .setColor(colorEmbed.color)
                .setAuthor('Avatar', av.avatarBot)
                .setTitle(user.username)
                .setImage(user.displayAvatarURL({size: 1024, dynamic: true}))
            
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
    name: 'avatar',
    description: 'user avatar in an embed',
    usage: '/avatar',
    accessableby: 'Members',
    aliases: ['av']
}