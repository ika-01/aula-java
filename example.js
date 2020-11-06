/*
Mais exigente nos erros
"use strict";
*/

let primeiroNome = "Francisca";
let ultimoNome = "Silva";
const idade = 19;

/*document.write(primeiroNome);
primeiroNome = 5;
document.write(primeiroNome);
primeiroNome = true;
document.write(primeiroNome);*/

//inteiros
let number1 = 3;

//float
let number2 = 4.0;


let even = number1 % 2;

//boleanos
let bool = true;

//strings
let text = "blablabla";

//--------------------Operações

let total = number1 % number2;
//Vai escrever no title
document.getElementById('title').innerHTML = total;
//NOTA: Escrever document em minusculas. Se der erro, só vai fazer o que escreveres no <script> do index.html
document.getElementById('title').innerHTML = primeiroNome + ' ' + ultimoNome + ' ' + 5;

let number3 = "1";
let number4 = 4;
//fica "14" - string
let t = number3 + number4; 
document.getElementById('title').innerHTML = t + "1";

let score = 5000;
document.write("<h1>O jogador " + primeiroNome + " tem " + score + " pontos</h1>");

//---------------------Array de Strings
let users = ["Ana", "Bruno", "Xica"];
//document.write(users);
//document.write(users[0]);
//document.write(users.length);

//Aparece na consola
console.log(users[1]);

//Acrescenta um valor ao vetor
users.push("David"); //Ana,Bruno,Xica,David

//Acrescenta ao inicio do array
users.unshift("António"); //António,Ana,Bruno,Xica,David

//Tira do inicio
users.shift(); //Ana,Bruno,Xica,David

//Tira do fim
users.pop(); //Ana,Bruno,Xica

//Inverter o Array
users.reverse(); //Xica,Bruno,Ana

//Recortar um dos nomes
users.slice(1,2); //Bruno

//-----SLICE

let users2 = ["A", "B", "C", "D"];

//Tirar um dos nomes fora
users2.slice(0,2).concat(users2.slice(3)); //a,b,d

//document.write(users2);

//------------SPLICE
let users3 = ["A", "B", "C", "D"];
// users3.splice(2,3); // A,B
users3.splice(2,1);
