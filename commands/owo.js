const Discord = require('discord.js');
const botsettings = require('../botsettings.json');
const colorEmbed = require('../entities/color.json');
const av = require('../entities/images.json');

module.exports.run = async (client, message, args) => 
{
    try
    {
        let prefix = botsettings.prefix;

        let cmd = message.content.toLowerCase().split(`${prefix}owo`);
    
        if (cmd)
        {
            await message.delete({ timeout: 1000 });
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
                .setDescription('OwO')

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
    name: 'owo',
    description:  'OwO',
    usage: '/owo',
    accessableby: 'Members',
    aliases: []
}