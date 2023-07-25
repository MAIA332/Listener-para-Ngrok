// Importar as bibliotecas necessárias
const { Telegraf } = require('telegraf'); //Biblioteca Telegraf para o bot do Telegram
const puppeteer  = require('puppeteer'); //Biblioteca Puppeteer para web scraping
const bot = new Telegraf("TOKEM_BOT_TELEGRAM");//Token do boot telegram

async function navegador(){ // Biblioteca Puppeteer para web scraping
  const browser = await puppeteer.launch({headless: true}); // Iniciar uma instância do navegador Chromium em modo "headless" (sem interface gráfica)
  const page = await browser.newPage(); // Criar uma nova página no navegador
  await page.goto('http://127.0.0.1:4040');// Navegar para a URL especificada
  const f = await page.$("[class='tunnels']"); // Encontrar um elemento com a classe CSSx'
  const text = await (await f.getProperty('textContent')).jsonValue();// Obter o conteúdo de texto desse elemento
  textenavegador = text; // Atribuir o valor do texto à variável 'textenavegador'
  await browser.close();// Fechar o navegador
}
navegador()// Chamar a função 'navegador'
  .then(() => {// Enviar a mensagem com o conteúdo extraído para o grupo ou chat com o ID '-1001816074750'
    bot.telegram.sendMessage(-1001816074750, `${textenavegador}`);
  })
  .catch((error) => {
    console.error('Error occurred:', error);
  });