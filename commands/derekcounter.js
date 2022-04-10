const vars = require('./../vars.json');

exports.run = (client, message, args) => {
    message.reply({
        content: 'Derek has said lmao ' + vars.dereklmaos + ' times since the bot has started counting '
        
    })
}


exports.name = "derekcounter"
exports.desc = "See how many times Derek has said lmao"