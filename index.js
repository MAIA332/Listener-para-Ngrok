// Importar as bibliotecas necessárias
const { Telegraf } = require('telegraf'); //Biblioteca Telegraf para o bot do Telegram
const puppeteer  = require('puppeteer'); //Biblioteca Puppeteer para web scraping
const bot = new Telegraf("TOKEN_BOT_TELEGRAM"); //Token do boot telegram
let ip;// Variável para armazenar o endereço IP

async function navegador(){ // Função para configurar e executar o Puppeteer para web scraping
  const browser = await puppeteer.launch({headless: true}); // Iniciar uma instância do navegador Chromium em modo "headless" (sem interface gráfica)
  const page = await browser.newPage(); // Criar uma nova página no navegador
  await page.goto('http://127.0.0.1:4040');// Navegar para a URL especificada
  const classcss = await page.$("[class='tunnels']"); // Encontrar um elemento com a classe CSS 'tunnels'
  const text = await (await classcss.getProperty('textContent')).jsonValue();// Obter o conteúdo de texto desse elemento
  ip = text;// Armazenar o endereço IP da variável 'text' e colocando na variável 'ip'
  await browser.close();// Fechar o navegador
}
navegador()//Chamar a função 'navegador' para obter o endereço IP
  .then(() => {
    bot.telegram.sendMessage(chat_ID, `${ip}`); // Enviar o endereço IP obtido para o chat_ID especificado
  })
  .catch((error) => {
    console.error('Error occurred:', error); // Tratar erros, caso ocorram
  });

bot.command('ip', (ctx) => ctx.reply(`${ip}`)); // Comando para responder com o endereço IP ao receber o comando "/ip"
bot.launch(); // Iniciar o bot Telegram