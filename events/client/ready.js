module.exports = async (client) => {
    client.user.setStatus("idle");
    console.log(
        client.chalk.blue(client.chalk.bold(`Bot`)),
        client.chalk.white(`>>`),
        client.chalk.red(`${client.user.username}`),
        client.chalk.green(`is ready!`)
    );
    console.log(
        client.chalk.blue(client.chalk.bold(`Bot`)),
        client.chalk.white(`>>`),
        client.chalk.yellow(`${client.guilds.cache.size}`),
        client.chalk.green(`guild is listening!!!`)
    );
};
