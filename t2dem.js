const Discord = require('discord.js');
const client = new Discord.Client();
const ytdl = require('ytdl-core');
const request = require('request');
const fs = require('fs');
const ms = require('ms');



var guilds = {};
client.on('message',async message => {
 var prefix2 = '!';//البرفكس
  if(message.content.startsWith(prefix2 + "تقديم")) {

if(!message.channel.guild) return message.reply(' ');


  let submite = message.guild.channels.find(`name`, "تقديم");

  if(!submite) return message.channel.send("❌لم اجد الروم الخاص بالتقديمات");

    let filter = m => m.author.id === message.author.id;

    let thisMessage;

    let thisFalse;

    message.channel.send('📝 **| من فضلك اكتب اسمك الأن... ✏ **').then(msg => {



    message.channel.awaitMessages(filter, {

      max: 1,

      time: 90000,

      errors: ['time']

    })

    .then(collected => {

      collected.first().delete();

      thisMessage = collected.first().content;

      let boi;

      msg.edit('📜 **| من فضلك اكتب عمرك  الأن... ✏ **').then(msg => {



          message.channel.awaitMessages(filter, {

            max: 1,

            time: 90000,

            errors: ['time']

          })

          .then(collected => {

            collected.first().delete();

            boi = collected.first().content;

            let boi2;

            msg.edit('🤵 **| من فضلك اكتب من اي بلد انت الأن... ✏ **').then(msg => {



              message.channel.awaitMessages(filter, {

                max: 1,

                time: 90000,

                errors: ['time']

              })

              .then(collected => {

                collected.first().delete();

              boi2 = collected.first().content;

      msg.edit('🛡 **| [ هل انت متأكد من تقديمك؟ | [ نعم ] او [ لا**');

 message.channel.awaitMessages(response => response.content === 'نعم' || 'لا' && filter,{

        max: 1,

        time: 90000,

        errors: ['time']

      })

      .then(collected => {

        if(collected.first().content === 'لا') {

          msg.delete();

          message.delete();

          thisFalse = false;

        }

        if(collected.first().content === 'نعم') {

          if(thisFalse === false) return;

          msg.edit('🕊 **| Done ✅, تم بنجاح نشر تقديم في روم التقديمات**');

          collected.first().delete();

          submite.send(`@everyone | @here
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
**[ ${message.guild.name}:arrow_down: ] Submite⬇**

[**اسم المقدم**]: 
${thisMessage}

[**عمره**]: 
${boi}

[**من بلد**]: 
${boi2}

[**تم التقديم بواسطة**]: 
${message.author}

[**ايدي المقدم**]: 
${message.author.id}`);

        }

      }

  );

});

    });

  }

    );

  });

}

);

    })}});
	
	 
client.on('ready', () => {
   client.user.setGame(" !تقديم ");
}); 
	
	
client.login(process.env.BOT_TOKEN);
