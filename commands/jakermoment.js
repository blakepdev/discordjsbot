const vars = require('./../vars.json');
const fs = require('fs')

module.exports = {
    callback: (message, ...args) => {
        console.log(args);
        if(args[0] === 'add'){
            message.reply({
                content: 'Added another Jaker moment to the counter'
            })

            vars.jakermoment++;

            fs.writeFile("vars.json", JSON.stringify(vars), err => {
                if (err) throw err;
    
                console.log('updated json')
            });
        }else if(args[0] === 'view'){
            message.reply({
                content: 'There has been a total of ' + vars.jakermoment.toString() + ' Jaker moments since this bot has started'
            })            
        }else{
            message.reply({
                content: 'Please use either add or view after the command'
            })      
        }
    }
}