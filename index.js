const { MessageActionRow, MessageButton} = require('discord.js');
const Discord = require('discord.js');
const botsettings = require('./botsettings.json')
const client = new Discord.Client({disableEveryone: true});
const av = require('./entities/images.json');

require("./util/eventHandler")(client)

const fs = require("fs");
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

const xpfile = require("./xp.json");


fs.readdir("./commands/", (err, files) => 
{

    if(err) console.log(err)

    let jsfile = files.filter(f => f.split(".").pop() === "js") 
    if(jsfile.length <= 0) 
    {
         return console.log("[LOGS] Couldn't Find Commands!");
    }

    jsfile.forEach((f, i) => 
    {
        let pull = require(`./commands/${f}`);
        client.commands.set(pull.config.name, pull);  
        pull.config.aliases.forEach(alias => 
        {
            client.aliases.set(alias, pull.config.name)
        });
    });
});


client.on("message", async message => {
    // Prefix
    let prefix = botsettings.prefix;

    var messageArray = message.content.toLowerCase().split(" ")
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if(!message.content.startsWith(prefix) || message.author.bot || message.channel.type === "dm") return;
    let commandfile = client.commands.get(cmd.slice(prefix.length)) || client.commands.get(client.aliases.get(cmd.slice(prefix.length)))
    if(commandfile) commandfile.run(client,message,args)
})

// level

client.on("message" ,function(message) {
    if(message.author.Client) return;
    var addXP = Math.floor(Math.random() * 10); //when i type addXP it will randomly choose a number between 1-10   [  Math.floor(Math.random() * 10)  ]
// lvl 1 statics
    if(!xpfile[message.author.id]) {
        xpfile[message.author.id] = {
            xp: 0,
            level: 1,
            reqxp: 100
        }
// catch errors
        fs.writeFile("./xp.json",JSON.stringify(xpfile),function(err){
            if(err) console.log(err)
        })
    }

    xpfile[message.author.id].xp += addXP

    if(xpfile[message.author.id].xp > xpfile[message.author.id].reqxp){
        xpfile[message.author.id].xp -= xpfile[message.author.id].reqxp // it will subtrsct xp whenever u pass a lvl
        xpfile[message.author.id].reqxp *= 2 // XP you need to increase if level 1 is 100 xp so lvl 2 will 200 xp (multiplied by 2 [   .reqxp *= 2  ])
        xpfile[message.author.id].reqxp = Math.floor(xpfile[message.author.id].reqxp) // XP Round
        xpfile[message.author.id].level += 1 // it add 1 level when u level up

// this code will send (" you are now level [your lvl]!") then it will delete it after 10 seconds
        message.reply("You Are Now Level **"+xpfile[message.author.id].level+"**!").then(
            msg=>msg.delete({timeout: "10000"})
        )

    }
// catch errors
    fs.writeFile("./xp.json",JSON.stringify(xpfile),function(err){
        if(err) console/log(err)
    })

    //if someone typed in chat =level it will make an embed
    if(message.content.startsWith("+level")){
        let user = message.mentions.users.first() || message.author

        let embed = new Discord.MessageEmbed()
            .setTitle(`${user.username}  Level's`)
            .setColor("#00ffff")
            .setThumbnail(user.displayAvatarURL())
            .addField("Level: ",xpfile[user.id].level)
            .addField("XP: ", xpfile[user.id].xp+"/"+xpfile[user.id].reqxp)
            .addField("XP Required: ",xpfile[user.id].reqxp)
        message.channel.send(embed)
    }
})

client.login(botsettings.token);