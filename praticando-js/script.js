
// =====FUNÇÕES NATIVAS JS=====

// =====FUNÇÃO MAP()=====
// Percorre uma lista e cria uma nova lista com base na condição
// let numeros = [1,2,3,4];

// let numerosDobrados = numeros.map(function(num) {
//     return num * 2;
// })

// retorno -> [2,4,6,8]

// console.log(numerosDobrados);

// ou assim:
// Arrow function com retorno implícito

// let numerosDobradosArrow = numeros.map(num => num*2);

// quando eu preciso usar o return?
// quando a função precisa ter maisd uma linha
// a setinha resumo o function


// numeros.map(num => {
//     let resultado = num * 2;
//     return resultado;
// })

// console.log("resultado: " + resultado);

// =====FILTER=====
// filtra elementos com base em uma condição
// let numeros = [5, 10, 15, 20];

// num -> palavrinha auxiliar
// let maioresQueDez = numeros.filter(num => num > 10);
// console.log(maioresQueDez); [15, 20];

// =====REDUCE=====
// Reduz os valores de um array para um único valor
// let numeros = [1, 2, 3, 4]

// acumulador inicia em 0
// variavel auxiliar é o num
// acumulador inicia em 0 e soma com o auxiliar até o último valor do array
// let soma = numeros.reduce((acumulador, auxiliar) => acumulador + auxiliar, 0);

// console.log(soma);

// =====FIND=====
// Retorna o primeiro elemento que atende a condição
// let produtos = [
//     { id: 1, nome: "Teclado", preco: 50 }, //produto
//     { id: 2, nome: "Mouse", preco: 30 }, //produto
//     { id: 2, nome: "Caderno", preco: 30 }, //produto
// ]

// Diferença entre Find e Filter
//  find -> retorna somente o primeiro elemento que ele encontra que atende a condição
//  filter -> retorna todos os elementos que atendem a condição

// find
// let item = produtos.find(produto => produto.id === 2);
// console.log(item)

// filter
// let itemFiltrado = produtos.filter(produto => produto.id === 2);
// console.log("Usando filter: ", itemFiltrado);

// =====SPLIT=====
// Divide a string em partes, transformando num array

// let frase = "JS é top";

// com espaço, separa as palavras pelo espaço
// let palavras = frase.split(" ");
// console.log(palavras);

// sem espaço, separa todas as letras dentro do array
// let palavras = frase.split(" ");

// =====TRIM=====
// trim remove espaços no inicio e final de uma string

// let nome = "    Paulo   ";
// let nomeLimpo = nome.trim();


// console.log(nome);
// console.log(nomeLimpo);

// =====INCLUDES=====
// Verifica se existe um valor dentro de uma lista e retorna um booleano
// verdadeiro ou falso

// let frutas = ["maçã", "banana"];

// let frutasIncludes = frutas.includes("banana");
// console.log(futasIncludes); //true

// toLowerCase -> transforma o texto em minúsculo
// toUpperCase -> transforma o texto em maiúsculo
// let nome = "KESSIA";
// let cargo = "instrutora";

// console.log(nome.toLowerCase());
// console.log(cargo.toUpperCase());

// =====FOREACH=====
// let nomes = ["João", "Guilherme", "Maria"];

// nomes.forEach(nome => console.log(`Seu nome é ${nome}`))

// =====SOME=====
// Verifica se pelo menos um item atende a condição
// retorna booleano
// let numeros = [1, 3, 5, 8];

// let temPar = numeros.some(num => num % 2 === 0);
// console.log(temPar) //true

// =====EVERY=====
// Verifica se TODOS os itens atendem a condição
// retorna booleano
// let todosPares = numeros.every(num => num % 2 === 0);
// console.log(todosPares) //false

// =====SORT=====
// Ordena os elementos do array

// let numeros = [3, 10, 5, 2, 4]
// let letras = ["c", "a", "x", "h"]

// para letras
// letras.sort();
// console.log(letras);

// para números
// numeros.sort((a, b) => a - b);
// console.log(numeros);

// =====REVERSE=====
// Inverte a ordem dos elementos do array
// let numeros = [1, 2, 3];

// numeros.reverse();
// console.log(numeros); //[3, 2, 1]

// =====JOIN=====
// Junta os elementos de um array em uma string
// let palavras = ["JS", "é", "top"];

// let frase = palavras.join(" ");
// console.log(frase); // "JS é top"

// PUSH
// POP
// SHIFT
// UNSHIFT

// let lista = ["A", "B"];
// console.log(lista);

// PUSH -> Adiciona elementos no final do array
// lista.push("C"); // adiciona
// console.log(lista);

// POP -> Remove elementos no final da lista
// lista.pop(); //remove
// console.log(lista);

// SHIFT -> Remove do início do array
// lista.shift(); //remove
// console.log(lista);

// UNSHIFT -> Adiciona elementos no início do array
// lista.unshift("A"); // adiciona
// console.log(lista);

// =====SLICE=====
// Cria uma cópia de uma parte da lista

/*

    array.slice(posição inicial, posição final)

    incial -> onde começa
    final -> onde termina (não inclui a posição/indice/index)

*/
// let numeros = [1, 2, 3, 4]

// let parte = numeros.slice(1, 3) // 1 e 3 são as posições do array
// console.log(parte); // [2, 3]

// =====SPLICE=====
// Remove ou adiciona elementos em QUALQUER POSIÇÃO

/*
    array.splice(index, count, item1, ..., itemX)

    index -> indice(posição do elemento no array)
    count -> número de itens a serem removidos (pode ser 0)
    item1, ..., itemX -> itens a serem adicionados

*/
// let numeros = [1, 2, 3, 4];

// removendo elementos, sem adicionar
// numeros.splice(1, 1)
// console.log(numeros); // [1, 3, 4]

// Removendo elementos e adicionando mais dois elementos
// let frutas = ["Banana", "Laranja", "Maçã", "Manga"];

// frutas.splice(0,3, "Limão", "Kiwi");
// console.log(frutas); // ["Limão", "Kiwi", "Manga"]

// frutas.splice(2,0, "Limão", "Kiwi");
// console.log(frutas);


// =====REPLACE=====
// substitui uma parte da string

/**
    replace(valorProcurado, valorQueSubstitui);
 */

// let texto = "Olá Mundo!";

// let novoTexto = texto.replace("mundo", "cliente");
// console.log(novoTexto);

// NOSSAS FUNÇÕES
// function exibirMensagem() {
//     console.log("Bem Vindo(a)!");
// }

// executando a função criada
// exibirMensagem()

// Função com parâmetros
// function cumprimentar(nome) {
//     console.log(`Olá, ${nome}`);
// }

// cumprimentar("Ana");
// cumprimentar("Carlos");

// Função com mais de um parâmetro
// const somar = (numero1, numero2) => numero1 + numero2;

// console.log(somar(1, 2))

// function somarNovo(numero1, numero2) {
//     console.log(numero1 + numero2)

// let resultado = numero1 + numero2
// return numero1 + numero2
// }

// =====PROMPT=====
// recebe/solicita infromação do usuário
// o valor recebido pelo prompt() normalmente é string

// let nome = prompt("Digite o seu nome: ")
// console.log(nome);
// alert(nome);

// recebendo um número e convertendo
// Number() -> converte de forma genérica
// let idade = Number(prompt("Digite seu nome: "));

// parseInt() -> converte o valor para número inteiro
// idade = parseInt(prompt("Digite seu nome: "));

// parseFloat() -> converte o valor paea número decimal/ponto flutuante
// idade = parseFloat(prompt("Digite seu nome: "));