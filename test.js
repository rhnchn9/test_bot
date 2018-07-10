const Discord=require("discord.js");
/*const slite=require("sqlite");
slite.open("./tac.sqlite");

var gods = new Object();
gods.title="Awakening of the Gods-The Last Sacred Treasure(M+1)";
gods.schedule=[new Date("July 8,2018 12:00:00"),
	       new Date("July 8,2018 13:59:00"),
	       new Date("July 10,2018 03:00:00"),
	       new Date("July 10,2018 04:59:00"),
	       new Date("July 13,2018 23:00:00"),
	       new Date("July 13,2018 00:59:00"),
	       new Date("July 18,2018 12:00:00"),
	       new Date("July 18,2018 13:59:00"),
	       new Date("July 21,2018 03:00:00"),
	       new Date("July 21,2018 04:59:00")];
gods.img="https://cdn.discordapp.com/attachments/424117485189595136/464821654309175317/gods.png";
gods.counter=0;
gods.estatus=0;
 
var untouch = new Object();
untouch.title="Untouchable Gunman #";
untouch.schedule=[new Date("April 7, 2018 15:30:00"),
			 new Date("April 7, 2018 16:29:00"),
			 new Date("April 9, 2018 17:35:00"),
			 new Date("April 9, 2018 18:34:00"),
	                 new Date("April 14, 2018 15:30:00"),
			 new Date("April 14, 2018 16:29:00"),
			 new Date("April 16, 2018 17:35:00"),
			 new Date("April 16, 2018 18:34:00"),
			 new Date("April 20, 2018 12:30:00"),
			 new Date("April 20, 2018 13:29:00"),
			 new Date("April 21, 2018 15:30:00"),
			 new Date("April 21, 2018 16:29:00"),
			 new Date("April 23, 2018 17:35:00"),
			 new Date("April 23, 2018 18:34:00"),
			 new Date("April 27, 2018 12:30:00"),
			 new Date("April 27, 2018 13:29:00"),
			 new Date("April 28, 2018 15:30:00"),
			 new Date("April 28, 2018 16:29:00"),
			 new Date("April 30, 2018 17:35:00"),
			 new Date("April 30, 2018 18:34:00"),
			 new Date("May 4, 2018 12:30:00"),
			 new Date("May 4, 2018 13:29:00"),
			 new Date("May 5, 2018 15:30:00"),
			 new Date("May 5, 2018 16:29:00"),
			 new Date("May 7, 2018 17:35:00"),
			 new Date("May 7, 2018 18:34:00"),
			 new Date("May 11, 2018 12:30:00"),
			 new Date("May 11, 2018 13:29:00"),
			 new Date("May 12, 2018 15:30:00"),
			 new Date("May 12, 2018 16:29:00"),
			 new Date("May 14, 2018 17:35:00"),
			 new Date("May 14, 2018 18:34:00"),
			 new Date("May 18, 2018 12:30:00"),
			 new Date("May 18, 2018 13:29:00"),
			 new Date("May 19, 2018 15:30:00"),
			 new Date("May 19, 2018 16:29:00"),
			 new Date("May 21, 2018 17:35:00"),
			 new Date("May 21, 2018 18:34:00"),
			 new Date("May 25, 2018 12:30:00"),
			 new Date("May 25, 2018 13:29:00"),
			 new Date("May 26, 2018 15:30:00"),
			 new Date("May 26, 2018 16:29:00"),
			 new Date("May 28, 2018 17:35:00"),
			 new Date("May 28, 2018 18:34:00"),
			 new Date("June 01, 2018 12:30:00"),
			 new Date("June 01, 2018 13:29:00"),
			 new Date("June 02, 2018 15:30:00"),
			 new Date("June 02, 2018 16:29:00"),
			 new Date("June 04, 2018 17:35:00"),
			 new Date("June 04, 2018 18:34:00"),
			 new Date("June 08, 2018 12:30:00"),
			 new Date("June 08, 2018 13:29:00"),
			 new Date("June 09, 2018 15:30:00"),
			 new Date("June 09, 2018 16:29:00"),
			 new Date("June 11, 2018 17:35:00"),
			 new Date("June 11, 2018 18:34:00"),
			 new Date("June 15, 2018 12:30:00"),
			 new Date("June 15, 2018 13:29:00"),
			 new Date("June 16, 2018 15:30:00"),
			 new Date("June 16, 2018 16:29:00"),
			 new Date("June 18, 2018 17:35:00"),
			 new Date("June 18, 2018 18:34:00"),
			 new Date("June 22, 2018 12:30:00"),
			 new Date("June 22, 2018 13:29:00"),
			 new Date("June 23, 2018 15:30:00"),
			 new Date("June 23, 2018 16:29:00"),
			 new Date("June 25, 2018 17:35:00"),
			 new Date("June 25, 2018 18:34:00"),
			 new Date("June 29, 2018 12:30:00"),
			 new Date("June 29, 2018 13:29:00"),
		         new Date("June 30, 2018 15:30:00"),
                         new Date("June 30, 2018 16:29:00"),
	                 new Date("July 02, 2018 17:35:00"),
			 new Date("July 02, 2018 18:34:00"),
			 new Date("July 06, 2018 12:30:00"),
			 new Date("July 06, 2018 13:29:00"),
			 new Date("July 13, 2018 12:30:00"),
			 new Date("July 13, 2018 13:29:00")];
			 
untouch.number=["1","1","2","2","1","3","3","2","4","4","3","5","5","4","5.5","5.5","5","6","6","5.5","7","7","6","8","8","7(last chance)","9","9","8(last chance)","10","10","9(last chance)","11","11","10(last chance)","12","12","11(last chance)","12(last chance)"];  

untouch.img="https://cdn.discordapp.com/attachments/424117485189595136/432451878413139970/untouch.png";
untouch.counter=0;
untouch.estatus=0;*/

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

/*function setcounter(schedule){
	var counter=0;
	var curdate=new Date();
	
	while(counter<schedule.length){
		if(curdate.valueOf()>schedule[counter].valueOf())
			counter+=2;
		else
			break;
	}
	
	return counter;
}

gods.counter=setcounter(gods.schedule);
untouch.counter=setcounter(untouch.schedule);


function eventstatus(schedule,estatus,counter,curdate){
	if(estatus)
		counter-=2;
	if(counter < schedule.length-1 && schedule[counter+1].valueOf() < curdate.valueOf()){
	    estatus = 0;
	}
	return estatus;
}


client.on("message", async message=>{
	
	if(message.author.bot)    return;
	
	if(!message.content.startsWith(process.env.PREFIX))    return;
	
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
	
	function defembed(schedule,curdate,title,img,counter,estatus){
		var i=0,outputstat,days,mins,hrs,timediff;
		
		if(curdate.valueOf()>schedule[schedule.length-1].valueOf() || counter>schedule.length )
			return 1;
		
		if(curdate.valueOf()<schedule[counter].valueOf()){
				timediff=schedule[counter].getTime()-curdate.getTime();
				timediff=timediff/(1000*60);
				timediff=Math.floor(timediff);
				mins=timediff%60;
				timediff/=60;
				timediff=Math.floor(timediff);
				hrs=timediff%24;
				days=Math.floor(timediff/24);
				outputstat="Starts after : "+days+" Day(s) "+hrs+" Hour(s) "+mins+" Minute(s).";
		}
		else if(curdate.valueOf()<schedule[counter+1].valueOf()){
				timediff=schedule[counter+1].getTime()-curdate.getTime();
				timediff=timediff/(1000*60);
				timediff=Math.floor(timediff);
				mins=timediff%60;
				timediff/=60;
				timediff=Math.floor(timediff);
				hrs=timediff%24;
				days=Math.floor(timediff/24);
				outputstat="Now on : "+days+" Day(s) "+hrs+" Hour(s) "+mins+" Minute(s) Left";
		}
			
		const embed = new discord.RichEmbed()
		.setTitle(title)
		.setColor(0x9f31cc)
		.setImage(img)
		.addField("Status",outputstat)
		.addField("Starts at",schedule[counter].toUTCString())
		.addField("Ends at",schedule[counter+1].toUTCString());
		return message.channel.send({embed});	               
	}
	
	if(command === "events"){
		
	    var curdate = new Date();
            var flg = new Array();
            var counter = untouch.counter;    
	
	if(untouch.estatus)
	        counter-=2;
	flg[0] = defembed(untouch.schedule,curdate,untouch.title+untouch.number[counter/2],untouch.img,counter,untouch.estatus);
	
        counter = gods.counter;
	    
        if(gods.estatus)
	        counter-=2;
	flg[1] = defembed(gods.schedule,curdate,gods.title,gods.img,counter,gods.estatus);    
		
        if(flg[0] === 1 && flg[1] === 1)
		 return message.channel.send("No events found");
		
	}				
	
	
});*/

client.on("messageDelete", async message=>{
	
	//if(message.author.bot)    return;
	
	let deletedby="";
	
	let guild=message.guild;
	
	//if(!guild.me.hasPermission('VIEW_AUDIT_LOGS'))    return;
	
	let logentry= await message.guild.fetchAuditLogs({type:'MESSAGE_DELETE'}).then(audit=>audit.entries.first());
	
	if(logentry.executor.bot)   return;

	if(logentry.extra.channel.id === message.channel.id && (logentry.target.id === message.author.id) && (logentry.extra.count>=1) && (logentry.createdTimestamp > (Date.now() - 5000)))
		deletedby=logentry.executor.username;
	else
		deletedby=message.author.username;
	
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
	
	let logs=guild.channels.find("name","logs");
	
	if(!logs){
		console.log("channel not found");
		return;
	}
	
	logs.send(msgdelete);
	
});
		 
client.login(process.env.BOT_TOKEN)
