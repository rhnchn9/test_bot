const Discord = require("discord.js");
const request = require('request-promise-native');

var previous_count_logs = 1;

const MAX_IMAGE_WIDTH = 400.0;
const MAX_IMAGE_HEIGHT = 300.0;
const client = new Discord.Client();

client.on("ready", () => {
    console.log('Test bot is on');
});

client.on("guildMemberAdd", member => {
    const guild = member.guild;

    if (member.user.bot) return;

    var norole = member.guild.roles.find("name", "Outcast");
    if (norole)
        member.addRole(norole);
});

client.on("guildMemberRemove", member => {
    let logs = member.guild.channels.find("name", "logs");
    if (!logs) {
        console.log("'logs' channel not found");
        return;
    }

    const memberleft = new Discord.RichEmbed()
        .setAuthor(`${member.user.username}#${member.user.discriminator}`, member.user.avatarURL)
        .setColor(0xf84802)
        .setTitle("Member Left/Kicked")
        .setDescription("This member has left or been kicked from the server");

    logs.send(memberleft);
});

client.on("messageDelete", async message => {
    if (message.author.bot) return;

    let logs = message.guild.channels.find("name", "logs");
    if (!logs) {
        console.log("'logs' channel not found");
        return;
    }

    //if(!guild.me.hasPermission('VIEW_AUDIT_LOGS'))    return;
	
    let logentry = await message.guild.fetchAuditLogs({ type: 'MESSAGE_DELETE' }).then(audit => audit.entries.first());	

    var deletedBy,msgToSend;
	
	if(logentry){	
        let current_count_logs = parseInt(logentry.extra.count);
        let elapsedTime = Math.abs(logentry.createdTimestamp - new Date().getTime());
	
        if (logentry.executor.id === message.author.id && logentry.extra.count >= 1)
            deletedBy = logentry.executor;
        else if (logentry.target.id === message.author.id && current_count_logs === (previous_count_logs + 1))
            deletedBy = logentry.executor;
        else if (logentry.target.id === message.author.id && current_count_logs === 1 && elapsedTime <= 1000)
            deletedBy = logentry.executor;
        else deletedBy = message.author;

        previous_count_logs = current_count_logs;
	}
	else deletedBy = message.author;

    if (message.attachments.size > 0) {
        msgToSend = new Discord.RichEmbed()
            .setTitle("Deleted Embed(Image/Video/File)")
            .setColor(0xf84802)
            .setAuthor(`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)
            .addField("Channel: ", message.channel);

        if (message.content.trim() !== '')
            msgToSend.addField('Text Content: ', ` ${message.content}`);

        var images = message.attachments.filter(a => a.height !== undefined && a.width !== undefined && !!a.proxyURL);
        if (images.size > 0) {
            var image = images.first(); // RichEmbeds only has support for a single image, so just using first image.
            var filename = image.filename,
                height = image.height,
                width = image.width;

            // We don't need the full image, so reduce image size while keeping aspect ratio.
            if (height >= width && height > MAX_IMAGE_HEIGHT) {
                width = Math.round((MAX_IMAGE_HEIGHT / height) * width);
                height = MAX_IMAGE_HEIGHT;
            } else if (width > height && width > MAX_IMAGE_WIDTH) {
                height = Math.round((MAX_IMAGE_WIDTH / width) * height);
                width = MAX_IMAGE_WIDTH;
            }

            var imgReq = {
                url: `${image.proxyURL}?width=${width}&height=${height}`,
                encoding: null,
                resolveWithFullResponse: false
            };

            var imgData = await request.get(imgReq).catch(err => {
                console.log(`Request for '${imgReq.url}' return a ${err.statusCode}.`)
            });

            if (imgData) { // request for the image was successful
                var attachment = new Discord.Attachment(imgData, filename);
                msgToSend.attachFile(attachment)
                         .setImage(`attachment://${filename}`);
            }
        }

        msgToSend.setFooter(`${deletedBy.username}#${deletedBy.discriminator} deleted it`, deletedBy.avatarURL)
                 .setTimestamp();
    } else {
        msgToSend = new Discord.RichEmbed()
            .setTitle("Deleted Message")
            .setColor(0xf84802)
            .setAuthor(`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)
            .addField("Channel: ", message.channel)
            .addField("Textual Content: ", ` ${message.content}`)
            .setFooter(`${deletedBy.username}#${deletedBy.discriminator} deleted it`, deletedBy.avatarURL)
            .setTimestamp();
    }

    logs.send(msgToSend);
});

function checkMemberRoles(member) {
    let rolesnames = ["Tunanians", "Salmonians", "Mackerel", "Seagulls", "Sea Cucumbah", "Sea Horse", "Birb"];
    let newrole;
    let len = rolesnames.length;

    for (var i = 0; i < len; i++) {
        newrole = member.roles.find("name", rolesnames[i]);
        if (newrole) return true;
    }

    return false;
}

client.on("guildMemberUpdate", (oldMember, newMember) => {
    if (!newMember.guild.me.hasPermission("MANAGE_ROLES")) return;

    let norole = newMember.guild.roles.find("name", "Outcast");
    if (!norole) return;

    if (oldMember.roles.has(norole.id) && newMember.roles.has(norole.id) && checkMemberRoles(newMember))
        newMember.removeRole(norole);
});

client.login(process.env.BOT_TOKEN)
