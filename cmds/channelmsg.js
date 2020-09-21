module.exports = {
  name: "channelmsg",
  description: "To send message to a specific channel",
  guildOnly: true,
  usage: "{prefix}channelmsg #channelname <content>",
  execute(message, args) {
    if (message.member.hasPermission(["ADMINISTRATION"])) {
      let targetChannel = message.mentions.channels.first();
      if (targetChannel) {
        messagecontent = message.content.slice(33);
        if (targetChannel && messagecontent) {
          targetChannel
            .send(messagecontent)
            .catch((error) =>
              message.reply(
                "Embed Error\n\n**Console**: ```js\n" + error + "```"
              )
            );
          console.log(
            targetChannel.name,
            message.author.username + "  **MESSAGE**",
            messagecontent
          );
        } else {
          message
            .reply("Please mention channelname and provide message ")
            .then((msg) => {
              msg.delete({ timeout: 5000 });
            });
        }
      }
    } else {
      message
        .reply("You dont have permission to use this command")
        .then((msg) => {
          msg.delete({ timeout: 5000 });
        });
    }
  },
};
