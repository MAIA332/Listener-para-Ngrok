# Script de atualização de informações geradas pelo serviço Ngrok

Bem-vindo! Este projeto foi criado com o objetivo de explorar conceitos web scrapping, usando a biblioteca `puppeeter` para a criação de um script que "escuta" o domínio randomico gerado pelo Ngrok, para expor as aplicações da maquina local para a WAN. O intuito principal é poder captar a alteração de domínio para atualizar qualquer acesso necessário.

<div align="center">
<h2>TELA DO NGROK</h2>
<img src="https://media.discordapp.net/attachments/1013591689715261502/1133847699683283076/image-2.png?width=900&height=569" width="500px"/>
</div>


<h1 align="center">Como instalar</h1>

<h3>Com interface gráfica</3>

```bash
$ git clone https://github.com/JulionBR/Primeiro_bot_telegram.git
$ cd Primeiro_bot_telegram/
$ npm install
$ node index.js
```

<h3>Sem interface gráfica</3>

```bash
$ git clone https://github.com/JulionBR/Primeiro_bot_telegram.git
$ cd Primeiro_bot_telegram/
$ chmod +x RodaNoServer.sh
$ ./RodaNoServer.sh
$ npm install
$ node index.js
```