const Discord = require('discord.js');
const botsettings = require('../botsettings.json');
const colorEmbed = require('../entities/color.json');
const av = require('../entities/images.json');

module.exports.run = async (client, message, args) => 
{
    try
    {
        let prefix = botsettings.prefix;

        let cmd = message.content.toLowerCase().split(`${prefix}fkick`)
        const user = message.mentions.users.first() || message.author;

        if (cmd)
        {
            await message.delete({ timeout: 1000 });
            var a = [];
            a.push(cmd.slice(prefix));
            var again = a.slice(' ').shift();
        }

        if (again[1] || again[1] != '') 
        {
            console.log(`\n${user} has been fake kicked.`);
            var embed = new Discord.MessageEmbed()
                .setColor(colorEmbed.color)
                .setAuthor('Kick ✧', av.avatarBot)
                .setDescription(`${user} has been kicked!`)

            message.channel.send(embed);
        }
        
        else
        {
            message.reply('please enter a valid user.');
            console.log(message.content + ' does not have second args.');
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
    name: 'fkick',
    description: 'fake kick',
    usage: '/fkick',
    accessableby: 'Members',
    aliases: []
}