const fetch = require('node-fetch');
const api_url = 'https://api.thecatapi.com/v1/images/search'
const command_handler = require('./../command-handler.js')

module.exports = {
    callback: (message, args) => {
        getCat().then(result => message.reply({
            content: result
        }))

        console.log(command_handler.commands)
    }
}

async function getCat(){
    const api_response = await fetch(api_url);
    const json = await api_response.json();
    return Promise.resolve(json[0].url)
}
