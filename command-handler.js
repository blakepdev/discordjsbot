const fs = require('fs');
const getFiles = require('./get-files');
require('dotenv').config();

module.exports = (client) => {
    const commands = {};
    const suffix = '.js';
    const commandFiles = getFiles('./commands', suffix);

    for (const command of commandFiles){
        let commandFile = require(command)
        if(commandFile.default) commandFile = commanandFile.default

        const split = command.replace(/\\/g, '/').split('/');
        const commandName = split[split.length - 1].replace(suffix, '');

        commands[commandName.toLowerCase()] = commandFile;
    }
    console.log(commands)

    client.on('messageCreate', (message) => {
        if(message.author.bot || !message.content.startsWith(process.env.PREFIX)){
            return
        }
        const args = message.content.slice(3).split(/ +/);
        const commandName = args.shift().toLowerCase();

        if(!commands[commandName]){
            console.log(commandName);
            return
        }

        try{
            commands[commandName].callback(message, ...args);
            console.log(commandName);
        } catch (error){
            console.error(error);
        }

    })
}