const { Client, Intents, DiscordAPIError, Collection } = require("discord.js");
const client = new Client({
    intents:[
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});
require('dotenv').config();
const fs = require('fs')
const vars = require('./vars.json')
client.commands = new Collection()
const commands = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))
for(file of commands){
    const commandName = file.split('.')[0]
    const command = require(`./commands/${commandName}`)
    client.commands.set(commandName, command)
}

client.on('ready', () => {
    console.log("Discord bot is online and ready.")
});

client.on('messageCreate', (message) => {
        
    if(message.author.id === "599746315894915072" && message.content.toLowerCase().includes('lmao')){
        vars.dereklmaos++;
        message.reply({
            content: 'Derek said lmao... again...'
        })

        fs.writeFile("./vars.json", JSON.stringify(vars), err => {
            if (err) throw err;

            console.log('updated json')
        });
    }else if(!message.author.bot && message.content.toLowerCase().includes('pog') && !message.content.toLowerCase().includes(process.env.PREFIX)){
        vars.pogcount++;
        message.reply({
            content: 'We are poggin boys'
        })
        fs.writeFile("./vars.json", JSON.stringify(vars), err => {
            if (err) throw err;

            console.log('updated json')
        });
    }else if(!message.author.bot && message.content.toLowerCase().includes("you're") || message.content.toLowerCase().includes("ur a") || message.content.toLowerCase().includes("you are")){
        message.reply({
            content: 'no u'
        })
    }else if(message.author.bot || !message.content.startsWith(process.env.PREFIX)){
        return
    }

    if(message.content.startsWith(process.env.PREFIX)){
        const args = message.content.slice(process.env.PREFIX.length).trim().split(/ + /g)
        const commandName = args.shift()
        const command = client.commands.get(commandName)
        if(!command) return
        command.run(client, message, args)

    }


})


client.login(process.env.TOKEN);