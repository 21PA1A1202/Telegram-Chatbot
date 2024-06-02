const TelegramBot = require('node-telegram-bot-api');
const token='5609686951:AAEiQ6LxanlPEERTmR70K_qJ-mXc8p4gZoA';
const bot=new TelegramBot(token, {polling:true});
const request = require('request');
bot.on('message',function(mess){
    request('http://www.omdbapi.com/?t='+mess.text+'&apikey=cffc2117', function (error, response, body){
        if(JSON.parse(body).Response=="True"){
            bot.sendMessage(mess.chat.id,"TITLE:"+JSON.parse(body).Title)
            bot.sendMessage(mess.chat.id,"DATE:"+JSON.parse(body).Released)
            bot.sendMessage(mess.chat.id,"ACTORS:"+JSON.parse(body).Actors)
            bot.sendMessage(mess.chat.id,"RATING:"+JSON.parse(body).Ratings[0].Value)

        }
        else{
            bot.sendMessage(mess.chat.id,"Can't find the movie")
        }

    });

})