const botsettings = require('../botsettings.json');

module.exports.run = async (client, message, args) =>
{
    try
    {
        let prefix = botsettings.prefix;

        let cmd = message.content.toLowerCase().split(`${prefix}support`);

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
            message.channel.send('https://discord.gg/g5fJFvDjnq');
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
        name: 'support',
        description: 'support command',
        usage: '+support',
        accessableby: 'Members',
        aliases: []
    }