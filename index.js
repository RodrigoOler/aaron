import restify from 'restify'
import botBuilder from 'botbuilder'

const server = restify.createServer()

// Setup restify server
server.listen(process.env.port || process.env.PORT || 3978, () {
  console.log(`${server.name} listening to ${server.url}`);
}

// Create chat bot
const connector = new botBuilder.ChatConnector({
  appId: process.env.MICROSOFT_APP_ID,
  appPassword: process.env.MICROSOFT_APP_PASSWORD
})

const bot = new botBuilder.UniversalBot(connector)

server.post('/api/messages', connector.listen());

// Bots Dialogs
bot.dialog('/', (session) {
  session.send('Aaron: Hello World')
})
