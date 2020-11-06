/*------------------DECLARAR FUNÇÕES

function myFunction(){
    document.write("<h1> Hey - funcao </h1> ");
}


//ou

let myFunction = function(){
    document.write("<h1> Hey - funcao 2 </h1>");
}

myFunction();

*/

//-------------------OPRACAO COM FUNÇÕES
/*
let multiplyNumbers = function(num1, num2){
    document.write(num1 + num2);
}

//vai fazer a conta com estes números
multiplyNumbers("4",3); //43

//OU (mais correto)

let multiplyNumbers = function(num1, num2){
    return num1 * num2;
}
document.write(multiplyNumbers(4,3)); //12

*/

//---------------------------------------------------FOREACH
/*
let users = ["Bruno", "André","Nuno", "Francisca", "Hernan"];

users.forEach(
    function(x) {
        //Cria um parágrafo para cada nome
        //document.write("<h3>" + x + "</h3>");

        //Escreve no documento, o elemento da função em letra maiuscula
        document.write("<h3>" + x.toUpperCase() + "</h3>");
    }

);
*/

/*
//---------------------------------------------- COMPARACAO

let a = "6";
let b = 6;

// == -> sem tipo
if(a == b){
    document.write("<h1>Iguais</h1>");
} else{
    document.write("<h1>Diferentes</h1>");
}

//Se a = "6" e b = 6 -> DÁ IGUAL
//Para evitar isto, usar um terceiro operador: === (verifica se têm o msm tipo)
if(a === b){
    document.write("<h1>Iguais</h1>");
} else{
    document.write("<h1>Diferentes</h1>");
}

// != ->
if(a != b){
    document.write("<h1>dif</h1>");
} else{
    document.write("<h1>ig</h1>");
}

if(a !== b){
    document.write("<h1>dif</h1>");
} else{
    document.write("<h1>ig</h1>");
}
*/


//----------------------MATEMATICA

//Math.PI = 3,14.......
//Math.floor(Math.PI) -> arredonda para o inteiro mais baixo (= 3);
//Math.ceil(Math.PI) -> arredonda para o inteiro para cima (= 4);
//Math.round(Math.PI) -> arredonda para o inteiro conforme o valor (.2 -> 3)  / (.6 -> 4)

//Math.random() - > gera um valor entre 0 e 1, com 1 excluir
// se quiser de 1 a 10: Math.floor(Math.random() * 10)
//Se n quiser o 0: 


//--------------------------------------OBJETOS

let phone = {
    //Propriedades (nome: valor)
    fabricante: "Apple",
    modelo: "iPhone",
    cor: "space gray",
    //objeto
    caracteristicas:{
        bluetooth: true,
        wifi: true,
        gps: false
    },
    //Vetor:
    apps: ["Contacts", 'Calculator', 'Safari']
}

//aceder Às propriedades:
console.log(phone["cor"]);
console.log(phone.modelo);
document.write(phone.caracteristicas.bluetooth);
document.write(phone.apps[0]);


let printPhone = function(){
    document.write("<br>Fabricante: " + phone.fabricante);
    document.write("<br>Modelo: " + +phone.modelo);
    document.write("<br>Cor: " + phone.cor);
    document.write("<br>Características: ");
    document.write("<br>")
    //ACABAR DE PASSAR da aula!
}

printPhone();
