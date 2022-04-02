const vars = require('./../vars.json');

module.exports = {
    callback: (message, args) => {
        message.reply({
            content: 'We have pogged ' + vars.pogcount + ' times since the bot has started counting '
        })
    }
}