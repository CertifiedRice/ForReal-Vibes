const Discord = require('discord.js');
const activity = require('../Activity/activity');

module.exports = client =>
{
    console.clear();
    console.log(`${client.user.username} has been started`);
    activity.activity.run(client);
}