const {MessageEmbed} = require('discord.js');
require('dotenv').config();

exports.run = (client, message, args) => {
    const commands = client.commands.map(command => command.name)
    const descriptions = client.commands.map(command => command.desc)

    const embed = new MessageEmbed()
    .setTitle('RedArms Bot Commands')
    .setFooter('The prefix for the bot is ' + process.env.PREFIX)

    for (let i = 0; i < Object.keys(commands).length; i++){
        embed.addField(String(commands[i]), String(descriptions[i]))
    }

    message.reply({
        embeds:[embed]
    })
}

exports.name = "help"
exports.desc = "Get a list of all commands"