const { Command } = require('discord.js-commando');
const discord = require('discord.js');

let channelID = "582255803587887104";

module.exports = class MeowCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'purge',
			aliases: ['clear-chat, bulkdelete, clear-channel'],
			group: 'first',
			memberName: 'purge',
			description: 'Deletes the last 100 messages from the channel.',
		});
    }
    
    run(message) {
		return message.guild.channel.get("582255803587887104").say("Meow!");
	}
};