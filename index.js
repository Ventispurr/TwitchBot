const tmi = require ('tmi.js');

const options = {
  options: {
    debug: true,
  },
  connection: {
    cluster: 'aws',
    reconnect: true,
  },
  identity: {
    username: 'YOUR BOTS USERNAME',
    password: 'YOUR BOT OAUTH TOKEN',
  },
  channels:['YOUR TWITCH CHANNEL'],
};

const client = new tmi.client(options);

client.connect();

client.on('connected', (address, port) => {
  client.action('Ventispurr', 'Hi! VentispurrBot is connected');
});

client.on('chat', (channel, user, message, self) => {
  if(message === '!ExampleCMD') {
    client.action('Ventispurr', 'This is what the bot will say when the command is run');
  }
});

