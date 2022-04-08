//let idade = 17;
//console.log(idade);
let altura = 165;
console.log(altura);
// camelCase  ex: nomeCompleto
let nomeCompleto = 'Leonardo dos Santos Oliveira';
let cidade = 'Uberaba';
let estado = 'MG';
console.log(nomeCompleto, cidade, estado);

// CONSTANTES

const valorIngressoAdulto = 20; // não e possivel redefinir o valor de uma variável const
valorIngressoAdulto = 30;
console.log(valorIngressoAdulto);

// TIPOS PRIMITIVOS

let nome = 'Leonardo'; // string literal
let idade = 17; // number literal
let estaAprovado = true; // boolean
let sobrenome = undefined; // Undefined
let corSelecionada = null; // redefinir valor

// TIPAGEM DINAMICA

// OBJETOS

let pessoa = {
    nome: 'Leonardo',
    idade: 17,
    estaAprovado: true,
    sobrenome: 'Oliveira'
};

console.log(pessoa);

// ARRAYS

let familia = [false, 25, 'Leonardo', 92];

console.log(familia.length);
console.log(familia);

// FUNCTIONS

let corSite = "azul";

function resetaCor(cor, tom) {
    corSite = cor + ' ' + tom;
};

console.log(corSite);
resetaCor("vermelho", "claro");
console.log(corSite);

// TIPOS DE FUNÇOES

// realiza uma tarefa, não devolve nada

function dizerNome() {
    console.log("Leonardo");
};

dizerNome();

// realiza um cálculo ou operação e retorna algo

function multiplicarPorDois(valor) {
    return valor * 2;
};

//console.log(multiplicarPorDois(5));

let resultado = multiplicarPorDois(5);

console.log(resultado);

// OPERADORES 

// Operadores Aritimético(matemáticos) 

let salario = 100;

// +, -, *, /, **

console.log(salario + salario);
console.log(salario - salario);
console.log(salario * salario);
console.log(salario / salario);
console.log(5 ** 5);

// ++ --

let idade = 17;
console.log(++idade);
console.log(idade);
console.log(--idade);
console.log(idade);

// Operadores Atribuição

let valorTecladoGamer = 100;
// valorTecladoGamer = valorTecladoGamer + valorTecladoGamer
// valorTecladoGamer = valorTecladoGamer - valorTecladoGamer
valorTecladoGamer += valorTecladoGamer;
console.log(valorTecladoGamer);

// Operadores de Compração
// igualdade estrita
console.log(1 === 1);
console.log('1' === 1);

// igualdade solta
console.log(1 == 1);
console.log('1' == 1);

// Operadores Tenário
// tem um cliente, 100 premium, comum
let pontos = 100;
let tipo = pontos > 100 ? 'premium' : 'comum';
console.log(tipo);

// Operadores Lógicos
// operador lógico e (&&)  | retorna TRUE se os dois valores forem true
let maiorDeIdade = true;
let possuiCarteiraDeTrabalho = true;
let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;
console.log(podeAplicar);

// operador lógico ou (||) | retorna TRUE se um dos valores forem true
let maiorDeIdade = false;
let possuiCarteiraDeTrabalho = true;
let podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho;
console.log('pode aplicar: ', podeAplicar);

// operador lógico NOT (!)
let candidatoRecusado = !podeAplicar;
console.log('Candidato Recusado: ', candidatoRecusado);

// Falsy
undefined
null
0
false
    ''
NaN - not a number

// Truthy
let corPersonalizada = '';
let corPadrao = 'azul';
let corPerfil = corPersonalizada || corPadrao;

console.log(corPerfil);

// Operadores Bitwise

// MINI-PROJETO 1

let a = 'vermelho';
let b = 'azul';

a = 'azul';
b = 'vermelho';

let c = a;
a = b;
b = c;


console.log(a);
console.log(b);

// IF...ELSE

const horas = new Date();
console.log(horas);
let hora = 22;

if (hora > 6 && hora < 12) {
    console.log("BOM DIAA!");
} else if (hora > 12 && hora < 18) {
    console.log("BOA TARDEE!");
} else {
    console.log("BOA NOITEE!");
}

// SWITCH...CASE

let permissao; // comum, gerente, diretor
permissao = '';

switch (permissao) {
    case 'comum':
        console.log("usuário comum");
        break;
    case 'gerente':
        console.log("usuário gerente");
        break;
    case 'diretor':
        console.log("usuário diretor");
        break;
    default:
        console.log("usuário não reconhecido");
}

// LAÇO DE REPETIÇÃO 

// existem 5 formas de repetições 
// 1° For

for (let i = 0; i <= 5; i++) {
    if (i % 2 !== 0) { // modules
        console.log(i);
    }
}

// 2° While 
let i = 5;

while (i >= 1) {
    if (i % 2 !== 0) {
        console.log(i);
    }
    i--;
}

// 3° Do...While
let i = 0;
do {
    console.log("digitando!", i);
    i++;
} while (i < 10)

// 4° For...In
const pessoa = {
    nome: 'Leonardo',
    idade: 17
};
for (let chave in pessoa) {
    console.log(chave, pessoa['nome']);
}

const cores = ['Vermelho', 'Azul', 'Verde'];

for (let indice in cores) {
    console.log(indice, cores[indice]);
}

// For...Of
for (let cor of cores) {
    console.log(cor);
}

// MINI-PROJETO 2 
//Escreva uma função que usa 2 números e retorna o maior entre eles

let valorMaior = max(10, 10);
console.log(valorMaior);

function max(n1, n2) {
    return n1 > n2 ? n1 : n2;
}

// MINI-PROJETO 3
// FIZZBUZZ
//Divisível por 3 => Fizz
//Divisível por 3 => Buzz
//Divisível por 3 e 5 => FizzBuzzes
//Não e divisível por 3 ou 5 => entrada
//Não é um número => 'Não é um número'

const resultado = fizzBuzz(7);
console.log(resultado);

function fizzBuzz(entrada) {
    if (typeof entrada !== 'number')
        return 'Não e um número';
    if (entrada % 3 === 0 && entrada % 5 === 0)
        return 'FizzBuzz';
    if (entrada % 3 === 0)
        return 'Fizz';
    if (entrada % 5 === 0)
        return 'buzz';
    return entrada;
}

// MINI-PROJETO 4
//Velocidade máxima de até 70km/h
//a cada 5km do limite você ganha 1 ponto
//Math.floor()
//caso pontos maior que 12 -> "Carteira Suspendida"

verificarVelocidade(90);

function verificarVelocidade(velocidade) {
    const velocidadeMax = 70;
    const kmPorPonto = 5;
    if (velocidade <= velocidadeMax)
        console.log('OK');
    else {
        const pontos = Math.floor(((velocidade - velocidadeMax) / kmPorPonto));
        if (pontos >= 12)
            console.log('Carteira Suspensa');
        else
            console.log('Pontos', pontos);
    }
}

// MINI-PROJETO 5
//Receber uma quantidade de valores para avaliar
//função exibe se cada valor é par ou impar

exibirTipo(5);

function exibirTipo(limite) {
    for (let i = 0; i <= limite; i++) {
        if (i % 2 === 0)
            Console.log(i, 'PAR');
        else
            console.log(i, 'IMPAR');
    }
}

// MINI-PROJETO 6
//Criar um método para ler propriedades de um objeto e
//exibir somente as propriedades do tipo string que estão nesse objeto

const filme = {
    titulo: 'VingaVingadores: Guerra Infinita',
    ano: 2018,
    diretores: 'Anthony Russo, Joe Russo',
    personagem: 'Homem de ferro'
}

exibirPropriedades(filme);

function exibirPropriedades(obj) {
    for (prop in obj)
        if (typeof obj[prop] === 'string')
            console.log(prop, obj[prop]);
}

// MINI-PROJETO 7
//Criar função de somar que retorna a
//soma de todos os múltiplos de 3 e 5
//Múltiplos de 3 = 3,6,9
//Múltiplos de 5 = 5,10
//Somando multiplos 
//armazenar os multiplos de 3
//armazenar os multiplos de 5
//somar os dois 

somar(10);

function somar(limite) {
    let multiplosDe3 = 0;
    let multiplosDe5 = 0;
    for (i = 0; i <= limite; i++) {
        if (i % 3 === 0)
            multiplosDe3 += i;
        if (i % 5 === 0)
            multiplosDe5 += i;
    }
    console.log(multiplosDe3 + multiplosDe5);
}

// MINI-PROJETO 8
//Exercício Nota Escolar
//Obter a média a partir de um arrays
// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

const array = [70, 70, 80];
console.log(mediaDoAluno(array));

function mediaDoAluno(notas) {
    const media = calculateMedia(notas)

    if (media < 59) return 'F';
    if (media < 69) return 'D';
    if (media < 79) return 'C';
    if (media < 89) return 'B';
    return 'A';
}

function calculateMedia(array) {
    let soma = 0;
    for (let valor of array) {
        soma += valor;
    }
    return soma / (array.length);
}

// MINI-PROJETO 9
//Criar uma função que exibe a quantidade de *
//que aquela linha possui
exibirAsteristicos(10);

function exibirAsteristicos(linhas) {
    let padrao = '';
    for (let linha = 1; linha <= linhas; linha++) {
        padrao += '*';
        console.log(padrao);
    }

    for (let linha = 1; linha <= linhas; linha++) {
        let padrao = '';
        for (let i = 0; i < linha; i++) {
            padrao += '*';
        }
        console.log(padrao);
    }

}

// MINI-PROJETO 10
//Criar uma função para mostrar os números primos de
//Primos
//Compostos
//Ex: 10, 11
exibirNumerosPrimos(15);

function exibirNumerosPrimos(limite) {
    for (let numero = 2; numero <= limite; numero++) {

        if (NumerosPrimo(numero)) console.log(numero)
    }
}

function NumerosPrimo(numero) {
    for (let divisor = 2; divisor < numero; divisor++) {
        if (numero % divisor === 0) {
            return false;
        }
    }
    return true;
}

// FUNÇÕES DE FABRICA

//Ex:
//const celular = {
//    marcaCelulat: 'ASUS',
//    tamanhoTela: {
//        vertical: 155,
//        horizontal: 75
//    },
//    capacidadeBateria: 5000,
//    ligar: function() {
//        console.log("Fazendo ligação...")
//    }
//}

function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria) {
    return {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar() {
            console.log("Fazendo ligação...")
        }
    }
}

const celular1 = criarCelular('Zenfone', 5.5, 5000);
console.log(celular1);

// FUNÇÃO DE CONSTRUTOR

//camelCase - umDoisTresQuatro
function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria) {
    return {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar() {
            console.log("Fazendo ligação...")
        }
    }
}

//Pascal Case - UmDoisTresQuatro
function Celular(marcaCelular, tamanhoTela, capacidadeBateria) {
    this.marcaCelular = marcaCelular,
        this.tamanhoTela = tamanhoTela,
        this.capacidadeBateria = capacidadeBateria,
        this.ligar = function() {
            console.log("Fazendo ligação...");
        }
}

const celular = new Celular('asus', 5.5, 5000);
console.log(celular);

// NATUREZA DINAMICA DE OBJETOS

const mouse = {
    cor: 'red',
    marca: 'dazz'
}
mouse.velocidade = 5000;
mouse.trocarDPI = function() {
    console.log('mudando DPI');
}
delete mouse.velocidade;
delete mouse.trocarDPI;
console.log(mouse);

// COLANDO OBJETOS

const celular = {
    marcaCelulat: 'ASUS',
    tamanhoTela: {
        vertical: 155,
        horizontal: 75
    },
    capacidadeBateria: 5000,
    ligar: function() {
        console.log("Fazendo ligação...")
    }
}

const novoObjeto = Object.assign({
    bateria: 5000
}, celular);
console.log(novoObjeto);

const objte2 = {...celular };
console.log(objte2);

// MATH 

Math.random() // cria numeros aleatorios
Math.maz(3, 6, 8, 10) // diz o maior valor 
Math.min(3, 6, 8, 10) // diz o menor valor 

// STRING
//tipo primitivo
const mensagem = 'minha primeira mensagem';
//tipo objeto
const outraMensagem = new String('bom dia!');

// TEMPLATE LITERAL

const mensagem = 'Oi isso é a minha\n' +
    '\'primeira \' mensagem';
//object {}
//boolean true, false
//string '', ""
//template ``
const outra = `Oi isso é minha
'primeira' mensagem`;

const nome = 'Leonardo';

const email =
    `Olá ${nome} ${2+2}

Obrigado por se inscrever no canal

Para acomponhar os vídeos não se esqueça de ativar o sino.

Obrigado
Jhonatan.`;

// LIDANDO COM DATAS

const data1 = new Date();
const data2 = new Date('March 06 2019 09:30:00');
const data3 = new Date(2019, 02, 06, 9, 30);

date3.getFullYear(2030);

date2.toDateString(); // converte a data para string
date2.toTimeString(); // informa o tempo local
date2.toISOString(); // transfere a informação do cliente para o servidor 

// MINI-PROJETO 11
//Criar um objeto endereco que contem:
//Rua
//Cidade
//CEP
//exibirEndereco(endereco)

let endereco = {
    rua: 'a',
    cidade: 'b',
    cep: 'c'
};

function exibirEndereco(endereco) {
    for (let chave in endereco) {
        console.log(chave, endereco[chave]);
    }
}

exibirEndereco(endereco);

// // MINI-PROJETO 12-IGUALDADE DE OBJETOS

function Endereco(rua, cidade, cep) {
    this.rua = rua,
        this.cidade = cidade,
        this.cep = cep
}

const endereco1 = new Endereco('a', 'b', 'c');
const endereco2 = new Endereco('a', 'b', 'c');
const endereco3 = endereco1;

function saoIguais(endereco1, endereco2) {
    return endereco1.rua === endereco2.rua &&
        endereco1.cidade === endereco2.cidade &&
        endereco1.cep === endereco2.cep;
}

console.log(saoIguais(endereco1, endereco2))

function temEnderecoMemoriaIguas(endereco1, endereco2) {
    return endereco1 === endereco3;
}

console.log(temEnderecoMemoriaIguas(endereco1, endereco2));

// MINI-PROJETO 13-OBJETO POSTAGEM DE BLOG
//Crie neste exercicio um objeto de postagem de blog que voce vai conter as seguintes propriedades
//postagem

//titulo
//mensagem
//autor
//visualizacoes
//comentario
//    (autor,mensagem)
//estaAoVivo


let postagem = {
    titulo: 'a',
    mensagem: 'b',
    autor: 'c',
    visualizacoes: 'd',
    comentario: [
        { autor: 'a', mensagem: 'b' },
        { autor: 'a', mensagem: 'b' }
    ],
    estaAoVivo: true
};

console.log(postagem);

// FUNÇOES DE CONSTRUTOR 
//Criar um objeto postagem
//titulo,mensagem,autor,visualizacoes,comentarios,estaaovivo

function Postagem(titulo, mensagem, autor) {
    this.titulo = titulo,
        this.mensagem = mensagem,
        this.autor = autor,
        this.visualizacoes = 0,
        this.comentario = [],
        this.estaAoVivo = false
};

let postagem = new Postagem('a', 'b', 'c');
console.log(postagem);

// FAIXA DE PRECO
//crie um array de objetos de faixa de preco para que ela possa ser usado em um site igual o mercado livre
//faixas,tooltip,minimo,maximo

// Primeira opcao
let faixas = [
    { tooltip: 'até R$700', minimo: 0, maximo: 700 },
    { tooltip: 'de R$700 a R$1000', minimo: 700, maximo: 1000 },
    { tooltip: 'R$1000 ou mais', minimo: 1000, maximo: 999999 }
];

// Segundo opcao(Factory Function)
function faixaDePreco(tooltip, minimo, maximo) {
    return {
        tooltip,
        minimo,
        maximo
    }
}

let faixas2 = [
    faixaDePreco('a', 1, 100),
    faixaDePreco('b', 100, 1000),
    faixaDePreco('a', 1000, 10000)
]

//Terceira opcao(Construct Function)
function faixaPreco(tooltip, minimo, maximo) {
    this.tooltip = tooltip,
        this.minimo = minimo,
        this.maximo = maximo
}
let faixas3 = [
    new faixaPreco('d', 10, 20),
    new faixaPreco('e', 20, 30),
    new faixaPreco('f', 30, 40)
]

console.log(faixas);
console.log(faixas2);
console.log(faixas3);

// INTRODUCAO DE ARRAYS
//add novos elementos
const numeros = [1, 2, 3];
//inicio
numeros.unshift(0);
console.log(numeros);
//meio
numeros.splice(1, 0, 'a');
console.log(numeros);
//final
numeros.push(5);
console.log(numeros);

//encontrar elementos(primitivos)
const numero = [1, 2, 3, 1, 4];
console.log(numero.indexOf(2) !== -1);
console.log(numero.includes(2));

//encontrar elementos(referencia)
const marcas = [
    { id: 1, nome: 'a' },
    { id: 2, nome: 'b' }
];

const marca = marcas.find(function(marca) {
    return marca.nome === 'a';
});
console.log(marca);

// ARROW FUNCTIONS
const marcas = [
    { id: 1, nome: 'a' },
    { id: 2, nome: 'b' }
];

console.log(marcas.find(marca => marca.nome === 'a'));

//remover elementos
const numeros = [1, 2, 3, 4, 5, 6];
numeros.push();
numeros.unshift();
numeros.splice();

//final
const ultimo = numeros.pop();
console.log(ultimo);
console.log(numeros);
//inicio
const primeiro = numeros.shift();
console.log(primeiro);
console.log(numeros);
//meio
const meio = numeros.splice(2, 1);
console.log(meio);

// ESVAZIAR UM ARRAY
let numeros = [1, 2, 3, 4, 5, 6];
let outros = numeros;

//solucao 1
numeros = [];
console.log(outros);

//solucao 2 
numeros.length = 0;
console.log(numeros);
console.log(outros);

//solucao 3
numeros.splice(0, numeros.length);
console.log(numeros);
console.log(outros);

//solucao 4 (solucao nao recomendavel)
while (numeros.length > 0)
    numeros.pop();

//combinar arrays
const primeiro = [{ id: 1 }];
const segundo = [4, 5, 6];
primeiro[0].id = 10;
const combinado = primeiro.concat(segundo);
console.log(combinado);

//dividir elementos
const cortado = combinado.slice(); // pode copiar a referencia
console.log(cortado);

// OPERADOR SPREAD
const primeiro = [1, 2, 3];
const segundo = [4, 5, 6];

//const combinado = primeiro.concat(segundo);
const combinado = [...primeiro, 'a', ...segundo, 'b'];
console.log(combinado);

//const cortado = combinado.slice();
const clonado = [...combinado];
console.log(clonado);

// INTERANDO UM ARRAY
const numeros = [1, 2, 3, 4, 5];

//forEach()
numeros.forEach((numero, indice) => console.log(numero, indice));

// COMBINANDO ARRAYS
const numeros = [1, 2, 3, 4, 5];
const combinado = numeros.join(' ');
console.log(combinado);

const frase = "ola bem vindo ao curso";
const resultado = frase.split(' ');
console.log(resultado);

console.log(resultado.join('-'));