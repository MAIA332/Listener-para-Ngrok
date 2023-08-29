// Importar as bibliotecas necessárias
const puppeteer  = require('puppeteer'); //Biblioteca Puppeteer para web scraping
let ip;// Variável para armazenar o endereço IP

async function navegador(){ // Função para configurar e executar o Puppeteer para web scraping
  const browser = await puppeteer.launch({headless: "new"}); // Iniciar uma instância do navegador Chromium em modo "headless" (sem interface gráfica)
  const page = await browser.newPage(); // Criar uma nova página no navegador
  await page.goto('http://127.0.0.1:4040');// Navegar para a URL especificada
  const classcss = await page.$("[class='tunnels']"); // Encontrar um elemento com a classe CSS 'tunnels'
  const text = await (await classcss.getProperty('textContent')).jsonValue();// Obter o conteúdo de texto desse elemento
  ip = text;// Armazenar o endereço IP da variável 'text' e colocando na variável 'ip'
  await browser.close();// Fechar o navegador
}
navegador()//Chamar a função 'navegador' para obter o endereço IP
  .then(() => {
    console.log(ip);
  })
  .catch((error) => {
    console.error('Error occurred:', error); // Tratar erros, caso ocorram
  });