"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
let client = new Discord.Client();
let prefix = "k.";
//name -> link
let funniestShit = new Map();
funniestShit.set("AutismoFaggot", "pissporn.com");
funniestShit.set("Eagle", "scatlovers.com");
funniestShit.set("krt", "vomitcompilations.org");
client.once('ready', () => {
    console.log('BOT READY');
    const Guilds = client.guilds.cache.forEach(guild => guild.members.fetch()
        .then(members => console.log(members))
        .catch(console.error));
});
client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot)
        return;
    let input = message.content.slice(prefix.length).split(" ");
    let command = input[0];
    let args = input.slice(1);
    switch (command) {
        case "funny":
            message.channel.send("LMAO THIS THE FUNNIEST SHIT ".concat(message.author.username, " HAS SEEN ALL WEEK!1!!!!111!!!!\n", funniestShit.get(message.author.username)));
            return;
        case "aw":
            if (args.length == 0)
                return;
            message.channel.send("Updated funniest shit seen all week");
            funniestShit.set(message.author.username, args[0]);
            return;
        default:
            return;
    }
});
client.login('ODE1MjMzNzU0MDY2NTgzNTYz.YDpbmQ.4lm7phBshNqzfCgUmOFU6ht17GI');
//# sourceMappingURL=main.js.map