const chalk = require("chalk");
const Table = require("cli-table3");
const config = require("../../config.json");
// Initialize the table outside the module.exports function to maintain a single instance
const table = new Table({
    head: [
        chalk.blue.bold("Bot"),
        chalk.blue.bold("Action"),
        chalk.blue.bold("Channel ID"),
        chalk.blue.bold("Server Name"),
    ],
    colWidths: [30, 30, 30, 30],
});

async function webhooksender(
    bot,
    action,
    channelId,
    serverName,
    ping,
    webhookurl = config.webhook
) {
    const { WebhookClient } = require("discord.js-selfbot-v13");
    const webhookClient = new WebhookClient({
        url: webhookurl,
    });
    await webhookClient.send({
        content: `**Bot:**${bot}\n**Action:**${action}\n**Server:** ${serverName}\n**Channel:** <#${channelId}>\n<@${ping}>`,
        username: "Auto Join Giveaways - Log",
    });
}

module.exports = async (client, message) => {
    /**
     * Client
     */
    // Function to add a new row to the table and print it
    const addRowToTable = (bot, action, channelId, serverName) => {
        table.push([
            chalk.yellow.bold(bot),
            chalk.green.bold(action),
            chalk.cyan.bold(channelId),
            chalk.magenta.bold(serverName),
        ]);
        console.clear();
        console.log(table.toString());
    };

    let msgcontent = message.content.toLowerCase();
    if (message.author.id === "294882584201003009") {
        if (message.components.length > 0) {
            let joinbutton = message.components[0].components.find(
                (button) => button.customId.toLowerCase() === `enter-giveaway`
            );
            if (joinbutton) {
                await message.clickButton(joinbutton.customId);
                if (client.config.webhook.length > 90) {
                    webhooksender(
                        "GiveawayBot#2381",
                        "Joined",
                        message.channel.id,
                        message.guild.name,
                        client.user.id
                    );
                } else {
                    addRowToTable(
                        "GiveawayBot#2381",
                        "Joined",
                        message.channel.id,
                        message.guild.name
                    );
                }
            }
        }
        if (msgcontent.includes(`congratulations <@${client.user.id}>!`)) {
            if (client.config.webhook.length > 90) {
                webhooksender(
                    "GiveawayBot#2381",
                    "You WON",
                    message.channel.id,
                    message.guild.name,
                    client.user.id
                );
            } else {
                addRowToTable(
                    "GiveawayBot#2381",
                    "You WON",
                    message.channel.id,
                    message.guild.name
                );
            }
        }
    }

    if (message.author.id === "530082442967646230") {
        if (message.components.length > 0) {
            let joinbutton = message.components[0].components.find(
                (button) => button.customId.toLowerCase() === `giveaway_message`
            );
            if (joinbutton) {
                await message.clickButton(joinbutton.customId);
                if (client.config.webhook.length > 90) {
                    webhooksender(
                        "Giveaway Boat#2911",
                        "Joined",
                        message.channel.id,
                        message.guild.name,
                        client.user.id
                    );
                } else {
                    addRowToTable(
                        "Giveaway Boat#2911",
                        "Joined",
                        message.channel.id,
                        message.guild.name
                    );
                }
            }
        }
        if (msgcontent.includes(`congratulations to <@${client.user.id}>`)) {
            if (client.config.webhook.length > 90) {
                webhooksender(
                    "Giveaway Boat#2911",
                    "You WON",
                    message.channel.id,
                    message.guild.name,
                    client.user.id
                );
            } else {
                addRowToTable(
                    "Giveaway Boat#2911",
                    "You WON",
                    message.channel.id,
                    message.guild.name
                );
            }
        }
    }
    if (message.author.id === "490039330388180992") {
        if (message.components.length > 0) {
            let joinbutton = message.components[0].components.find(
                (button) => button.customId.toLowerCase() === `yok:giveaway`
            );
            if (joinbutton) {
                await message.clickButton(joinbutton.customId);
                if (client.config.webhook.length > 90) {
                    webhooksender(
                        "Marpel#2574",
                        "Joined",
                        message.channel.id,
                        message.guild.name,
                        client.user.id
                    );
                } else {
                    addRowToTable(
                        "Marpel#2574",
                        "Joined",
                        message.channel.id,
                        message.guild.name
                    );
                }
            }
        }
        if (
            msgcontent.includes("<:kral:959550081672024094>") &&
            msgcontent.includes(`<@${client.user.id}>`)
        ) {
            if (client.config.webhook.length > 90) {
                webhooksender(
                    "Marpel#2574",
                    "You WON",
                    message.channel.id,
                    message.guild.name,
                    client.user.id
                );
            } else {
                addRowToTable(
                    "Marpel#2574",
                    "You WON",
                    message.channel.id,
                    message.guild.name
                );
            }
        }
    }
};
