const TelegramBot = require('node-telegram-bot-api');

const token = '8909671700:AAHvDP85rdCZzjSyztbclnQZEBwfHCGaxoM';
const bot = new TelegramBot(token, { polling: true });

// Команда /start
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, '✅ Привет! Я бот, который работает на Render. Я умею отвечать на любое сообщение.');
});

// Ответ на любое текстовое сообщение (кроме /start)
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;
    if (text !== '/start') {
        bot.sendMessage(chatId, `🔁 Ты написал: ${text}`);
    }
});

console.log('🚀 Бот запущен');