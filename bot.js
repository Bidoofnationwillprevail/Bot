const discord = require(`discord.js`),
      fs = require(`fs`),
      test = require(`https://github.com/Bidoofnationwillprevail/Bot/blob/master/Json.json`),
      client = new discord.Client({disableEveryone: true});
client.login(process.env.BOT_TOKEN);
client.on(`ready`, () => {
  client.user.setPresence({status: "online", game: {name: "World Domination", type: "PLAYING" }});
});
client.on(`message`, (message) => {
  try {
        if (message.author.bot || message.channel.type != `text`) {return;}
        if (!test.hasOwnProperty(message.author.name)) {test[message.author.name] = 0;}
        test[message.author.name] += 1;
        fs.writeFile(`https://github.com/Bidoofnationwillprevail/Bot/blob/master/Json.json`, JSON.stringify(test, null, 4), (error) => {if (error) {throw error;}});
  } catch (error) {message.guild.owner.send(`ERROR`);}
  });
