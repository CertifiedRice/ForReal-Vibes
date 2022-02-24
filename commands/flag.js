const Discord = require('discord.js');
const botsettings = require('../botsettings.json');
const colorEmbed = require('../entities/color.json');
const av = require('../entities/images.json');

module.exports.run = async (client, message, args) => 
{
    try
    {
        prefix = botsettings.prefix;

        var cmd = message.content.toLowerCase();
        
        if (cmd.startsWith(`${prefix}flag`)) 
        {
            var a = message.content.split(prefix).splice(1);
            var args = a[0].split(' ');
            console.log (args);

            if (args[2])
            {
                message.reply('this command needs only one argument.');
            }

            else if (args[1])
            {
                console.log(message.content + " has second args");
                
                if (args[1] != '!832193HFVPAQHMNPKLFF!')
                {
                    var embed = new Discord.MessageEmbed()
                        .setColor(colorEmbed.color)
                        .setAuthor('Flag ✧', av.avatarBot)
                        .setDescription('The flag you sent is the wrong one.')
                    
                    message.channel.send(embed);
                }

                else
                {
                    var embed = new Discord.MessageEmbed()
                        .setColor(colorEmbed.color)
                        .setAuthor('Flag ✧', av.avatarBot)
                        .setDescription('The flag you sent is the right one.')
                
                    message.channel.send(embed);
                }
            }

            else 
            {
                message.reply('this command needs a second argument.');
                console.log(message.content + " does not have second args");
            }
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
    name: 'flag',
    description: 'compare your flag to the real one',
    usage: '/flag {flag}',
    accessableby: 'Members',
    aliases: []
}