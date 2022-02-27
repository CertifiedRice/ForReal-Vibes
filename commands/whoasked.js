const Discord = require('discord.js');
const botsettings = require('../botsettings.json');
const colorEmbed = require('../entities/color.json');
const av = require('../entities/images.json');

module.exports.run = async (client, message, args) =>
{
    try
    {
        let prefix = botsettings.prefix;

        let cmd = message.content.toLowerCase().split(`${prefix}whoasked`);
    
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
            message.channel.send('ɴᴏᴡ ᴘʟᴀʏɪɴɢ: Who asked (Feat: No one) ───────────:white_circle:────── ◄◄⠀▐▐ ⠀►► 5:12/ 7:𝟻𝟼 ───○ :loud_sound:⠀ ᴴᴰ :gear:');
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
    name: 'whoasked',
    description: 'Who asked?',
    usage: '/whoasked',
    accessibly : 'Members',
    aliases: []
}