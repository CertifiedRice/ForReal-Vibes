const botsettings = require('../botsettings.json');

module.exports.run = async (client, message, args) => 
{
    try
    {
        let prefix = botsettings.prefix;

        let cmd = message.content.toLowerCase().split(`${prefix}ping`);
    
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
            message.channel.send('pong');
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
    name: 'ping',
    description: 'pong',
    usage: '/ping',
    accessableby: 'Members',
    aliases: []
}