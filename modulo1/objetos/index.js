
// Exercício d einterpretação de códigos.

//Tente responder os exercícios dessa seção sem executar o código. 
//Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.**

// //1

// const filme = {
// nome: "Auto da Compadecida", 
// ano: 2000, 
// elenco: ["Matheus Nachtergaele", "Selton Mello", "Denise Fraga", "Virginia Cavendish"], transmissoesHoje: [{canal: "Telecine", horario: "21h"}, {canal: "Canal Brasil", horario: "19h"}, {canal: "Globo", horario: "14h"}]

// }

// console.log(filme.elenco[0]) // Esta soliciando o nome ator que se encotra na posição zero da lista.
// console.log(filme.elenco[filme.elenco.length - 1]) // Solicita o nome da ultima pessoal do elenco na lista.
// console.log(filme.transmissoesHoje[2]) // Solicita o nome de quem esta na posição 2.


//A) O que vai ser impresso no console?

// Será impresso Matheus Nachtergaele; Virginia Cavendish e Globo as 14hs.

//2 -  Leia o código abaixo

// const cachorro = {
// nome: "Juca", 
// idade: 3, 
// raca: "SRD"

// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)

// A) O que vai ser impresso no console?

// Cachorro nome Juca, 03 anos, raça: SRD, gato nome Juba, 03 anos, raça: SRD e tartatuga nome Jubo, 03 anos, raça: SRD.

// B) O que faz a sintaxe dos três pontos antes do nome de um objeto?

// Ela (copiam) as 03 os objetos determiados SPREAD


// 3 - Leia o código abaixo.

// function minhaFuncao(objeto, propriedade) {
// return objeto[propriedade]

// }

// const pessoa = {
// nome: "Caio", 
// idade: 23, 
// backender: false

// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))

// A) O que vai ser impresso no console?
 // FALSE e na segunda undefined.

// B) Explique o valor impresso no console. Você sabe por que isso aconteceu ?
//Por que não foi atribuido valor a altura 


// ----------------------------------------------------//--------------------------------------------------

// 3 - Exercícios de escrita de código.
//Resolva os passos a seguir

//a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos 
//(um array que sempre terá exatamente **três apelidos**).Depois, escreva uma função que recebe como entrada um 
//objeto e imprime uma mensagem no modelo abaixo**:**

// let infopessoa = {
// nome: "Robson", 
// apelidos: ["joaozinho", "pedrinho" ,'cara']

// }
// function recebeobjeto (parametro)  {
// console.log(`Eu sou ${parametro.nome}, mas pode me chamar de: ${parametro.apelidos[0]}, ${parametro.apelidos[1]} ou ${parametro.apelidos[2]}`)
// }

// recebeobjeto(infopessoa)



// //A)

// const pessoa = {
// nome: "Amanda", 
// apelidos: ["Amandinha", "Mandinha", "Mandi"]

// }

// let apelidosDois = {
//    ...infopessoa, 
// apelidos: ['mariazinha','robertinho','mano']

// }

//  recebeobjeto(apelidosDois)


// }

//Exemplo de saída "Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi"


//B) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma
//nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto.







//2 - Resolva os passos a seguir: 


//a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão.

let pessoaUm = {
nome: 'Sergio', 
idade: 26,
profissão: 'programador'

}

let pessoaDois = {
nome: 'Robson',
idade: 32,
profissão: "programador"

}

//b) Escreva uma função que receba um objeto de cada vez e retorne um array com as seguintes informações:

// function recebeObjeto(parametro) {
// let infos = [parametro.nome, parametro.nome.length, parametro.idade, parametro.profissão, parametro.profissão.length]
// return infos 
// }

// console.log(recebeObjeto(pessoaDois))



// O valor de `nome`
// O numero de caracteres do valor `nome`
// O valor de `idade`
// O valor de `profissão`
// O numero de caracteres do valor `profissão`



//3 - Resolva os passos a seguir: 

//a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`
let carrinho = []


//b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: 
//nome (string) e disponibilidade (boolean - devem começar como true).

let fruta1 = {
nome: 'Banana', 
disponibilidade: true
}


let fruta2 = {
nome: "abacabi",
disponibilidade: true

}

let fruta3 = { 
nome: 'maça',
disponibilidade: true
}




//c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do array de
// `carrinho`. Invoque essa função passando os três objetos criados. [


function recebeObjeto(parametro) {
carrinho.push(parametro)
return carrinho
}
 
//d)  Imprima a variável carrinho e garanta que ela agora seja um array preenchido com três objetos.

console.log(recebeObjeto(fruta1))   
console.log(recebeObjeto(fruta2))
console.log(recebeObjeto(fruta3))

