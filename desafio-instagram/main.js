
/*desafio de programação 1
//parte1
let valor1 = parseInt(gets());
let valor2 = parseInt(gets());

//TODO: Complete os espaços em branco utilizando uma possível solução para o desafio:

let total = valor1 * valor2 ;
print("PROD = " +   total   );

//parte2
let line = gets().split(" ");
let A = parseInt(line[0]);
let B = parseInt(line[1]);

//TODO: Complete os espaços em branco com uma possível solução para o desafio:

let total = A + B; 
print("X = " + total);
*/


function botao(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>";
}

function redirecionar(){
    window.open("https://www.google.com.br/");
   // window.location.href = "https://www.google.com.br/";
}

function trocar(elemento){
    //document.getElementById("mouseover").innerHTML = "<b>Obrigado por passar o mouse!</b>";
    elemento.innerHTML = "<b>Obrigado por passar o mouse!</b>";
}

function voltar(elemento){
    //document.getElementById("mouseover").innerHTML = "<b>Passe o mouse aqui</b>";
    elemento.innerHTML = "<b>Passe o mouse aqui</b>";
}

function load(){
    alert("Carregou!")
}

function funcaoChange(elemento){
    console.log(elemento.value)
}


//var lista  = [nome: "rosa" , "cravo" , "tulipa", "margarida"];
//console.log(lista[2]);

/*
var d = new Date();
alert(d);//getMonth()+1 / getMinutes() / getDay() / getHours()
*/

/*
var count;
for(count=0; count <= 5; count++){
    alert(count);
};
*/

/*
var count = 0;
while (count <= 5){
    console.log(count);
    count++;
};
*/

/*
var idade = prompt("Qual sua idade?");
if (idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
};
*/

/*
var frutas = [{nome:"maçã",cor:"vermelha"}, {nome:"uva",cor:"roxa"}]
console.log(frutas)
alert(frutas[1].nome)
*/

/*
var fruta = {nome:"maçã", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/

/*
var lista =["maçã","pêra","laranja"];
console.log(lista[1]);
lista.push("uva");
lista.pop();

console.log(lista[0]);
console.log(lista.toString());
console.log(lista.join(" | "));
*/

/*
var nome = "Rafael Galleani";
var n1 = 5;
var n2 = 3;
var frase = "Japão é o melhor time do mundo";
alert(nome + " tem "+idade+" anos");
alert(n1+n2);
console.log(nome);
console.log(n1*n2);
console.log(frase.toLowerCase());
*/

