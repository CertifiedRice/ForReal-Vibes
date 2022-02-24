const botsettings = require('../botsettings.json');

module.exports.run = async (client, message, args) => 
{
    let prefix = botsettings.prefix;

    let cmd = message.content.toLowerCase().split(`${prefix}bye`);

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
            message.reply('bye!');
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
    name: 'bye',
    description: '@user, bye!',
    usage: '/bye',
    accessableby: 'Members',
    aliases: []
}