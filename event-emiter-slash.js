const { SlashCommandBuilder, Events } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('event-emiter')
        .setDescription('Simulates an event')
        .addStringOption(option => option.setName('event').setDescription('The event to simulate').setRequired(true).addChoices(
            { name: 'GuildMemberAdd', value: 'GuildMemberAdd' }
        )),

    async execute(interaction) {
        const event = interaction.options.getString('event');
        let client = interaction.client;

        switch (event) {
            case 'GuildMemberAdd':
                client.emit(Events.GuildMemberAdd, interaction.member);
                break;
            default:
                return interaction.reply({ content: 'Event not found', ephemeral: true });
        }

        interaction.reply({ content: 'Event emitted', ephemeral: true });
    }
}
