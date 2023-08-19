client.on('messageCreate', async message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const commandName = args.shift().toLowerCase();
    if (commandName === 'event-emiter') {
        const event = args[0];
        if (event === 'guildMemberAdd') {
            client.emit('guildMemberAdd', message.member);
        } else if (event === 'ready') {
            client.emit('ready', client);
        }
        await message.reply({ content: `Simulated event ${event}` });
    }
})