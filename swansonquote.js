const fetch = require('node-fetch');
const api_url = 'http://ron-swanson-quotes.herokuapp.com/v2/quotes'

async function getQuote(){
    const api_response = await fetch(api_url);
    const json = await api_response.json();
    return Promise.resolve(json)
}

function sendQuote(client){
    getQuote().then(result => client.channels.cache.get('962809641614598234').send({content: String(result)}))
}

module.exports = function(client){
    sendQuote(client)
    setInterval(() => sendQuote(client), 1000 * 60 * 60 * 24)
}