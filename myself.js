const discord = require('discord.js');
const client = new discord.Client();
const botsettings = require('./botsettings.json');
const token = botsettings.token;

const prompt = (ask) => {
    let ans = require('child_process')
        .execSync(`echo "${ask}"|dmenu`)
        .toString();
    return ans;
}
 
function startBot() {
    client.on('ready',() => {
        console.log("started client");
        client.user.setActivity("Archlinux");
        require('child_process')
            .execSync(" notify-send --urgency=LOW --expire-time=1 'Started ArchticZone bot.' ")       
            .toString();                                                                              
    })
 
    client.on('message', msg => {
        if(msg.author.bot) return;
        let res = prompt(`[ ${msg.author.username} ]: ${msg.content.toString()}`);
        msg.channel.send(res);
        client.user.setStatus('dnd');
    })
 }
 
try {
    startBot();
} catch {
    startBot();
}
 
client.login(process.env.token);