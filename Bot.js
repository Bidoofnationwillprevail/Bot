const discord = require(`discord.js`),
      fs = require(`fs`),
      test = require(`./Test.json`),
      client = new discord.Client({disableEveryone: true});
client.login(test.token);
client.on('error', console.error);
client.on(`ready`, () => {
  client.user.setPresence({status: "online", game: {name: "World Domination", type: "PLAYING" }});
});
client.on(`message`, (message) => {
  if (message.author.bot || message.channel.type != `text`) {return;}
  if (!test.hasOwnProperty(message.author.name)) {test[message.author.name] = 0;}
  test[message.author.name] += 1;
  fs.writeFile(`./Test.json`, JSON.stringify(test, null, 4), (error) => {if (error) {throw error;}});
});
