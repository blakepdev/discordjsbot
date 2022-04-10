const vars = require('./../vars.json');

exports.run = (client, message, args) => {
    message.reply({
        content: 'We have pogged ' + vars.pogcount + ' times since the bot has started counting '
    })
}


exports.name = "pogcount"
exports.desc = "See how many times pog has been said in the discord"