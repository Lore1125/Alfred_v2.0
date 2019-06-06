const { Command } = require('discord.js-commando');

let channelID = "582255803587887104";

module.exports = class MeowCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'meow',
			aliases: ['kitty-cat'],
			group: 'first',
			memberName: 'meow',
			description: 'Replies with a meow, kitty cat.',
		});
    }
    
    run(message) {
		return message.channel.get(channelID).say("Meow!");
	}
};