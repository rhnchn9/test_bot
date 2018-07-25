const Discord=require("discord.js");
/*const slite=require("sqlite");
slite.open("./tac.sqlite");*/

var previous_count_logs=1;

const client= new Discord.Client(); 
	
client.on("ready",()=>{
console.log('Test bot is on');
});

client.on("guildMemberAdd",member=>{
	const guild=member.guild;
	
	if(member.user.bot)    return;
	
	var norole=member.guild.roles.find("name","No Role");
	if(norole)
	    member.addRole(norole);
});

client.on("guildMemberRemove",member=>{
	
	let logs=member.guild.channels.find("name","logs");
	
	const memberleft=new Discord.RichEmbed()
	.setAuthor(member.user.username+"#"+member.user.discriminator,member.user.avatarURL)
	.setColor(0xf84802)
	.setTitle("Member Left/Kicked")
	.setDescription("This member has left or been kicked from the server");
	
	
	logs.send(memberleft);
	
});

client.on("messageDelete", async message=>{
	
	if(message.author.bot)    return;
	
	let deletedby="";
	
	let msgdeletetimestamp= new Date().getTime();
	
	//if(!guild.me.hasPermission('VIEW_AUDIT_LOGS'))    return;
	
	let logentry= await message.guild.fetchAuditLogs({type:'MESSAGE_DELETE'}).then(audit=>audit.entries.first());
	
	let current_count_logs=parseInt(logentry.extra.count);

	if(logentry.executor.id === message.author.id && (logentry.extra.count>=1))
		deletedby=logentry.executor.username;
	else if(logentry.target.id === message.author.id && (current_count_logs === previous_count_logs+1))
		deletedby=logentry.executor.username;
	else if(logentry.target.id === message.author.id && (current_count_logs === 1) && (Math.abs(logentry.createdTimestamp - msgdeletetimestamp)) <=1000 )
		deletedby=logentry.executor.username;
	else
		deletedby=message.author.username;
	
	previous_count_logs=current_count_logs;
	
	let msgdelete;
	
	if(message.attachments.size > 0){
		
	msgdelete = new Discord.RichEmbed()
	.setTitle("Deleted Embed(Image/Video/File)")
	.setColor(0xf84802)
	.setAuthor(message.author.username+"#"+message.author.discriminator,message.author.avatarURL)
	.addField("Channel: ",message.channel)
	.addField("Deleted by:",deletedby);
	
	}
	
	else{
		
        msgdelete = new Discord.RichEmbed()
	.setTitle("Deleted Message")
	.setColor(0xf84802)
	.setAuthor(message.author.username+"#"+message.author.discriminator,message.author.avatarURL)
	.addField("Channel: ",message.channel)
	.addField("Textual Content: "," "+message.content)
	.addField("Deleted by:",deletedby);
	
	}
	
	let logs=message.guild.channels.find("name","logs");
	
	if(!logs){
		console.log("channel not found");
		return;
	}
	
	logs.send(msgdelete);
	
});

function checkMemberRoles(member){
		let rolesnames = ["Tunanians","Salmonians","Mackerel","Seagulls","Sea Cucumbah","Sea Horse"];
		let newrole;
		let len = rolesnames.length;
		
		for(i=0;i<len;i++){
			newrole = member.roles.find("name",rolesnames[i]);
			if(newrole)    return true;
		}
		
		return false;
		
}

client.on("guildMemberUpdate",(oldMember,newMember)=>{
	
	if(!newMember.guild.me.hasPermission("MANAGE_ROLES"))    return;
	
	let norole = newMember.guild.roles.find("name","No Role");
	if(!norole)    return;
	
	if(oldMember.roles.has(norole.id) && newMember.roles.has(norole.id) && checkMemberRoles(newMember))
		newMember.removeRole(norole);
		
	
});
		 
client.login(process.env.BOT_TOKEN)
