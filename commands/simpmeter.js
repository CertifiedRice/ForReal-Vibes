const botsettings = require('../botsettings.json');

module.exports.run = async (client, message, args) =>
{
    try
    {
        let prefix = botsettings.prefix;

        let cmd = message.content.toLowerCase().split(`${prefix}simpmeter`);

        var percent = Math.floor(Math.random() * 10 + 1);

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
            message.channel.send(`${message.author.username} has a rating of ` + percent + `% on the simp meter!`);
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
        name: 'simpmeter',
        description: 'simp',
        usage: '+simpmeter',
        accessibly : 'Members',
        aliases: []
    }