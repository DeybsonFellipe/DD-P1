// DESENVOLVIMENTO DINAMICO P1


//--------------------------------------


// AMBIENTES DE PROGRAMAÇÃO PARA JS
   // Usando JS e node.js

let nome = "Deybson Fellipe";
let idade = 22;

console.log("Seu nome é: " + nome + " e sua idade é: " + idade)



// PROGRAMAÇÃO COM JS: CONCEITOS
   // Formas de trabalhar com JS
   // Usando códigos básicos direto no navegador 

   // Variáveis

console.log("Teste");

 var a = 10;
 var b = 20;

 var total = a + b;

 console.log(total);



 // PROGRAMANDO COM JS: PRIMEIROS COMANDOS 
   // Tipos de dados na prática


var n = '';

console.log(typeof(n));


   // Operadores na prática

var n = 3;

n = n * 10;

n *= 10;

a = 10;
b = 15;

console.log(a != b)



// CRIANDO E MANIPULANDO ARRAYS 
   // Praticando o uso de Arrays


var valores = [8,1,7,2,9];

for (var pos = 0 ; pos < valores.length; pos++){
   console.log("Posicao:  " + valores[pos]);
}

   // Outras formas de declarar

var carros = []
carros[0] = "volvo";
carros[1] = "Jeep";
carros[2] = "Fiat";


var motos = new Array("bmw","yamaha","honda");


   // Calculando a média de todos os números de um Array


 var valores = [8,1,7,2,9];
 var soma = 0;

 for (var pos = 0 ; pos < valores.length; pos++){
    soma += valores[pos;]
 }

 var media = soma / valores.length;

 console.log(media);



   // Métodos de Arrays
      // Principais funções de Arrays 
      // join, shift, sort, reverse, slice, length, push e pop.


      // O reverse inverte a sequencia do Array


var valores = [8,1,7,2,9];

console.log("Array invertido: " + valores.reverse());
 

      // O Join transforma um Array em uma string com algum caractere entre os elementos


var valores = [1,2,3,4,5,6];

console.log(valores.join('|'));



// AVANÇANDO COM ARRAYS

   // Método splice

var arr2 = [1,2,3,4,5,6,7];

arr2.splice(2,2);

console.log(arr2);
 

   // Trocando o joao pelo luiz usando o splice

   

var nomes = ["Maria","Joao","Lucas","Pedro"];

var novos = nomes.splice(1,1,"Luiz");

console.log(nomes);


   // Acrescentando usando o unshift


var pais = ["Brasil","Argentina","Colombia"];

pais.unshift("Uruguay");

console.log(pais);


   // Ultilizando mais Arrays


      // Slice & concat exemplos

   var pessoa = ["Eduardo","Joana","Wallace","Rosana"];


   var pessoas1 = pessoa.slice(1,3);

   console.log(pessoa);
   console.log(pessoas1);


   var pessoa = ["Eduardo","Joana","Wallace","Rosana"];

   var gerente = ["Davi","Manuela"];

   var empresa = pessoa.concat(gerente);

   console.log(empresa);



    // Filter
      // Filtrando os itens do array que sao divisiveis por 2


var numeros = [1,2,3,4,5,6,7,8,9,10];

var resultado = numeros.filter(item => item % 2 == 0);

console.log(resultado);


   // Usando outra maneira 

var numeros = [1,2,3,4,5,6,7,8,9,10];

var numerosFiltrados = numeros.filter(

   function(valor){
      return valor > 5;
   }

);

// console.log(numerosFiltrados);


   // Outro exeplo de uso do filter


var funcionarios = [

{nome: "Luiz", idade: 62},
{nome: "Davi", idade: 22},
{nome: "Arthur", idade: 18},
{nome: "Lucas", idade: 40}

];

var pessoaListagem = funcionarios.filter(
   function(valor){
      console.log(valor.nome);

});



   // O uso do MAP (interage com os elementos)



var numeros = [1,2,3,4,5,6,7,8,9,10];

var nums = numeros.map(function(valor){

   return valor * 2 

});

console.log(nums);


   // Outro exepmlo de uso do MAP


var funcionarios = [

{nome: "Luiz", idade: 62},
{nome: "Davi", idade: 22},
{nome: "Arthur", idade: 18},
{nome: "Lucas", idade: 40}

];


nomes = funcionarios.map(pessoa => pessoa.nome);

console.log(nomes);




// Reduce
   // Outra forma de iterar com Arrays
   // Reduz os valores a um único valor



// ForEach com Arrays


var a  = [10,20,30,40,50,60];

for (let valor of a){

   console.log(valor);

}

   // Exemplo usando ForEach


var a  = [10,20,30,40,50,60];

a.forEach(valor => console.log(valor));



// INSTRUÇÕES: IF E SWITCH

   // Praticando o uso do if


   var pais = "Brasil";

   if(pais != "Brasil"){

      console.log("Voce é estrangeiro");

   }else {

      console.log("Voce é Brasileiro");

   }




   // Instruções do Switch

      // Praticando o Switch


var diaSem = 4;

switch(diaSem){

   case 1:
      console.log("Domingo");
      break;

   case 2:
      console.log("Segunda");
      break;

   case 3:
      console.log("Terça");
      break;

   default: 
      console.log("Nenhum dia disponivel");

}                                                  



// Atividade Prática P1



var escolhaCliente = 0;

switch(escolhaCliente){

   case 1:
      console.log("Café")
      valor = 5.00
      break;

   case 2:
      console.log("Leite")
      valor = 8.00
      break;


   case 3:
      console.log("Chá")
      valor = 5.00
      break;


   default: 
      console.log("As nossas opções são apenas Café, Leite e Chá.")

}

console.log(`Você escolheu a bebida ${escolhaCliente}. E o valor a ser pago é R$${valor}`);


























