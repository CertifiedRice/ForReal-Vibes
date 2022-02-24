const botsettings = require('../botsettings.json');

module.exports.run = async (client, message, args) => 
{
    try
    {
        let prefix = botsettings.prefix;

        let cmd = message.content.toLowerCase().split(`${prefix}hi`);
    
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
            message.reply('hi!');
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
    name: 'hi',
    description: '@user, hi!',
    usage: '/hi',
    accessableby: 'Members',
    aliases: []
}