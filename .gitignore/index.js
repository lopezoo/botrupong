const Discord = require('discord.js');
const bot = new Discord.Client();
bot.login('Njc3OTU0MDE2ODE4MjMzMzQ1.XkbzZQ.MxBk106cGkqBRitU3NVCMzSjQIs');

bot.on('ready',function () {
    bot.user.setGame("Serveur OFF - Rupong")
})
