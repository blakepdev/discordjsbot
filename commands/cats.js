const fetch = require('node-fetch');
const api_url = 'https://api.thecatapi.com/v1/images/search'


exports.run = (client, message, args) => {
    getCat().then(result => message.reply({
        content: result
    }))
}

async function getCat(){
    const api_response = await fetch(api_url);
    const json = await api_response.json();
    console.log(json)
    return Promise.resolve(json[0].url)
}

exports.name = "cats"
exports.desc = "Get a random cat picture"