const Discord = require('discord.js');
const botsettings = require('../botsettings.json');
const colorEmbed = require('../entities/color.json');
const av = require('../entities/images.json');

module.exports.run = async (client, message, args) => 
{
    let prefix = botsettings.prefix;

    let cmd = message.content.toLowerCase().split(`${prefix}bins`);

    try
    {
        if (cmd)
        {
            await message.delete({ timeout: 1000 });
            var a = [];
            a.push(cmd.slice(prefix));
            var again = a.slice(' ').shift();    
        }
        if (again[1] || again[1] != '') 
        {
            message.channel.send('This command doesn\'t support a second argument.');
        }
        else
        {
            var embed = new Discord.MessageEmbed()
                .setColor(colorEmbed.color)
                .setAuthor('Bins ✧', av.avatarBot)
                .setDescription(':fire: [__**``Ghostbin``**__](https://ghostbin.co/)\n' + 
                ':fire: [__**``Pastebin``**__](https://pastebin.com/)\n' +
                ':fire: [__**``Hastebin``**__](https://hastebin.com/)')

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
    name: 'bins',
    description: 'list of bins',
    usage: '/bins',
    accessableby: 'Members',
    aliases: []
}