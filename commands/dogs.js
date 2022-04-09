const fetch = require('node-fetch');
const api_url = 'https://dog.ceo/api/breeds/image/random'

module.exports = {
    callback: (message, args) => {
        getCat().then(result => message.reply({
            content: result
        }))
    }
}

async function getCat(){
    const api_response = await fetch(api_url);
    const json = await api_response.json();
    return Promise.resolve(json.message)
}
