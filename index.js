const TelegramBot = require('node-telegram-bot-api');
const token = '411060038:AAEjx0DVlosmt91lFb1NVlVYQlLrfmYqO7s';
const bot = new TelegramBot(token, {
    polling: true
});
const emoji = require('node-emoji').emoji;
const users = [];

bot.on('message', (msg) => {
    
    if (users.indexOf(msg.from.id) === -1) {
        bot.sendMessage(msg.from.id, "Hello " + "<b>" + msg.from.first_name + "</b>, nice to meet you! You are new here, right? I am Percival, your new friend, lets get to know each other!", {
            parse_mode: "HTML"
        });
        users.push(msg.from.id);
        console.log(`New user ${msg.from.first_name} with and id ${msg.from.id} joined the bot`);
        
    } else {
        bot.sendMessage(msg.from.id, "Hello again " + "<b>" + msg.from.first_name + "</b>, how are you today? " + emoji.heart, {
            parse_mode: "HTML"
        });        
    }
});

bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, "Welcome! My name is Percival and I am your new friend!", {
        "reply_markup": {
            "keyboard": [
                ["Set up"]
            ]
        }
    });
});

bot.onText(/\/love/, (msg) => {
    bot.sendMessage(128056504, "Я люблю зайца!");
});

bot.sendMessage(165205553, "Сервер с ботом запущен");