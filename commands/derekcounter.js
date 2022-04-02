const vars = require('./../vars.json');

module.exports = {
    callback: (message, args) => {
        message.reply({
            content: 'Derek has said lmao ' + vars.dereklmaos + ' times since the bot has started counting'
        })
    }
}