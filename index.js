const { Client, Intents } = require("discord.js");
const client = new Client({
    intents:[
        Intents.FLAGS.GUILDS
    ]
});
require('dotenv').config();

client.on('ready', () => {
    console.log("Discord bot is online and ready.")
});

client.login(process.env.TOKEN);