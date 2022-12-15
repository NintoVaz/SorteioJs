const participantes = [];
let usuario = prompt("digite seu nome");
participantes.push(usuario);
usuario = prompt("digite seu nome");
participantes.push(usuario);
usuario = prompt("digite seu nome");
participantes.push(usuario);
usuario = prompt("digite seu nome");
participantes.push(usuario);
usuario = prompt("digite seu nome");
participantes.push(usuario);
usuario = prompt("digite seu nome");
participantes.push(usuario);
usuario = prompt("digite seu nome");
participantes.push(usuario);
usuario = prompt("digite seu nome");
participantes.push(usuario);
usuario = prompt("digite seu nome");
participantes.push(usuario);
usuario = prompt("digite seu nome");
participantes.push(usuario);
console.log(participantes);
const premio = parseInt(prompt("digite o valor total de prêmio"));

const primerioVencedor = Math.floor(Math.random() * (10 - 1) + 1);

const nomePrimeiroVencedor = participantes[primerioVencedor - 1];

const segundoVencedor = Math.floor(Math.random() * (10 - 1) + 1);

const nomeSegundoVencedor = participantes[segundoVencedor - 1];

const terceiroVencedor = Math.floor(Math.random() * (10 - 1) + 1);

const nomeTerceiroVencedor = participantes[terceiroVencedor - 1];
alert("o primeiro vencedor foi: " + nomePrimeiroVencedor);
alert("ele ganhou: " + premio / 2);
alert("o segundo vencedor foi: " + nomeSegundoVencedor);
alert("ele ganhou: " + premio / 4);
alert("o terceiro vencedor foi: " + nomeTerceiroVencedor);
alert("ele ganhou: " + premio / 4);
