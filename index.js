const { Client, Intents } = require("discord.js");
const client = new Client({
    intents:[
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});
require('dotenv').config();

client.on('ready', () => {
    console.log("Discord bot is online and ready.")
    let handler = require('./command-handler');
    if (handler.default) handler = handler.default

    handler(client)
});

client.login(process.env.TOKEN);