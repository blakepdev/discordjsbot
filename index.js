const { Client, Intents } = require("discord.js");
const client = new Client({
    intents:[
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});
require('dotenv').config();
const fs = require('fs');
const vars = require('./vars.json');

client.on('ready', () => {
    console.log("Discord bot is online and ready.")
});

client.on('messageCreate', (message) => {
    if(message.content === process.env.PREFIX + 'scharfafk add'){
        message.reply({
            content: 'Added another AFK counter to the Scharfs'
        })

        //Update value for json file
        vars.scharfafk++;

        //Update JSON file
        fs.writeFile("vars.json", JSON.stringify(vars), err => {
            if (err) throw err;

            console.log('updated json')
        });
    }else if(message.content === process.env.PREFIX + 'scharfafk view'){
        message.reply({
            content: 'That Scharfs have managed to go AFK a total of ' + vars.scharfafk.toString() + ' times since this bot has started'
        })
    }
});

client.login(process.env.TOKEN);