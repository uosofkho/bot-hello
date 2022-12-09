const Discord = require("discord.js");
const client = new Discord.Client();

const TOKEN = "my-token-is-here";

client.on("message", message => {
  if (message.content === "Hello Discord Bot") {
    message.channel.send("Hi There!");
  }
  {
    console.log("Bot Is Ready!");
  }
});

client.login(TOKEN)
