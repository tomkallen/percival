const TelegramBot = require('node-telegram-bot-api');
const token = '411060038:AAEjx0DVlosmt91lFb1NVlVYQlLrfmYqO7s';
const bot = new TelegramBot(token, {
    polling: true
});

bot.on('message', (msg) => {    
    if (msg.text.toLowerCase().indexOf("hi") === 0) {
        bot.sendMessage(msg.from.id, "Hello " + "<b>" + msg.from.first_name + "</b>, how are you today?", {
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