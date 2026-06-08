require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const express = require('express');

const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, '✅ Бот работает! Я на Render.');
});

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;
    if (text !== '/start') {
        bot.sendMessage(chatId, `🔁 Эхо: ${text}`);
    }
});

console.log('🚀 Бот запущен');

// Фейковый веб-сервер для Render
const app = express();
app.get('/', (req, res) => res.send('Бот работает'));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Сервер на порту ${PORT}`));