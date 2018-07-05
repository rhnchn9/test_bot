const Discord=require("discord.js");
/*const slite=require("sqlite");
slite.open("./tac.sqlite");*/

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

/*client.on("message", async message=>{
	
	if(message.author.bot)    return;
	
	if(!message.content.startsWith(config.prefix))    return;
	
	if(message.channel.type === "dm")    return;
	
	slite.get('SELECT * from profiledata WHERE userID = "${message.author.id}"').then(row=>{
		
		if(!row){
			slite.run("INSERT into profiledata values(?,?,?)",[message.author.id,1,0]);
			console.log("if");
		}
		else
		{
			let currentxp=Math.floor(math.random()*20+1)+row.Xp;
			let xplimit=row.Level*300;
			if(currentxp > xplimit){
				currentxp=Math.floor(currentxp%xplimit);
				
				row.Level++;
				
				const levelup=new Discord.RichEmbed()
				.setTitle("Level Up!")
				.setThumbnail(message.author.avatarURL)
				.addField("",message.author+" cheers!! Upgraded to Level "+row.level);
				
				message.channel.send(levelup);
			}
				
				
			slite.run("UPDATE profiledata set Xp = "+currentxp+",Level = "+row.level+" WHERE userID = ${message.author.id}");
		}
		
	}).catch(()=>{
		console.error;
		slite.run("CREATE TABLE IF NOT EXISTS profiledata(userID INTEGER,Level INTEGER,Xp INTEGER)").then(()=>{
			slite.run("INSERT into profiledata values(?,?,?)",[message.author.id,1,0]);
			console.log("catch");
		});
	});
	
	if(!message.content.startsWith(config.prefix))    return;
	
	const args=message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command=args.shift().toLowerCase();
	
	if(command === "profile"){
		
		let xp,level;
		
		slite.get('SELECT * from profiledata where userID=$"{message.author.id}"').then(row=>{
		
            if(!row){
			    slite.run("INSERT into profiledata values(?,?,?)",[message.author.id,1,0]);
				xp=0;
				level=1;
			}
			else{
				xp=row.Xp;
				level=row.Level;
			}
             							
		}).catch(()=>{
		    slite.run("CREATE TABLE IF NOT EXISTS profiledata(userID TEXT,Level INTEGER,Xp INTEGER)").then(()=>{
				slite.run("INSERT into profiledata values(?,?,?)",[message.author.id,1,0]);
			});
			xp=0;
			level=1;
	    });
		
		console.log(xp+" "+level);
	
		const profilecard=new Discord.RichEmbed()
		.setTitle("Profile")
		.setThumbnail(message.author.avatarURL)
		.addField("Name: ",message.author.username)
		.addField("Exp: " ,xp)
		.addField("Level: ",level);
		
		message.channel.send(profilecard);
		
	}
	
	
});*/

client.on("messageDelete", async message=>{
	
	//if(message.author.bot)    return;
	
	let deletedby;
	
	let guild=message.guild;
	
	//if(!guild.me.hasPermission('VIEW_AUDIT_LOGS'))    return;
	
	let logentry= await message.guild.fetchAuditLogs({type:'MESSAGE_DELETE'}).then(audit=>audit.entries.first());
	
	if(logentry.executor.bot)   return;

	if(logentry.target.id === message.author.id && logentry.extra.count>=1)
		deletedby=logentry.executor.username;
	else
		deletedby=message.author.username;
	
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
	
	let logs=guild.channels.find("name","logs");
	
	if(!logs){
		console.log("channel not found");
		return;
	}
	
	logs.send(msgdelete);
	
});
		 
client.login(process.env.BOT_TOKEN)
