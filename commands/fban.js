const botsettings = require('../botsettings.json');
const Discord = require('discord.js');
const colorEmbed = require('../entities/color.json');
const av = require('../entities/images.json');

module.exports.run = async (client, message, args) => 
{
    try
    {
        let prefix = botsettings.prefix;

        let cmd = message.content.toLowerCase().split(`${prefix}fban`)
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
            console.log(`\n${user} has been fake banned.`);

            var embed = new Discord.MessageEmbed()
                .setColor(colorEmbed.color)
                .setAuthor('Ban ✧', av.avatarBot)
                .setDescription(`${user} has been banned!`)

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
    name: 'fban',
    description: 'fake ban',
    usage: '/fban',
    accessableby: 'Members',
    aliases: []
}