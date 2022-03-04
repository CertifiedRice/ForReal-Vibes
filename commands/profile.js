const Discord = require('discord.js');
const botsettings = require('../botsettings.json');
const colorEmbed = require('../entities/color.json');
const av = require('../entities/images.json');

const xpfile = require('../xp.json');

module.exports.run = async (client, message, args) =>
{
    let prefix = botsettings.prefix;

    let cmd = message.content.toLowerCase().split(`${prefix}profile`);
    const user = message.mentions.users.first() || message.author

    try
    {
        if (cmd)
        {
            var embed = new Discord.MessageEmbed()
                .setColor(colorEmbed.color)
                .setThumbnail(user.displayAvatarURL())
                .setTitle(`${user.username}'s Profile`)
                .addField("Level: ",xpfile[user.id].level)
                .addField("XP: ",xpfile[user.id].xp)
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
        name: 'profile',
        description: 'user profile',
        usage: '+profile',
        accessableby: 'Members',
        aliases: ['av']
    }