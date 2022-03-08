// // ATENÇÃO!!!
// //    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
// //    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// // EXERCÍCIO 

// function retornaArrayArray(array) {
//     return array.length
// }


// // // EXERCÍCIO 02

//   function retornaArrayInvertido(array) {
//       return array.reverse()
//   }


// // // EXERCÍCIO 03
// function retornaArrayOrdenado(array) {
//     return array.sort(function(a, b) {
//         if (a < b) {
//             return -1
//         } else {
//             return 1
//         }
//     })
// }
  

// // // EXERCÍCIO 04
// function retornaNPrimeirosPares(array) {
// let retornaNumerosPares = []
// for (let i = 0; i < array.length; i ++) { 
//     if (array[i] % 2 === 0) {   
//     numeroPares.push(array[i])
// }
// }
//   return numeroPares
// }



// // // EXERCÍCIO 05

//     function retornaNumerosParesElevadosADois(array) {
//         let retornaNumerosPares = []
//         for (let i = 0; i < array.length; i ++) { 
//             if (array[i] % 2 === 0) {   
//             numeroPares.push(array[i] **2 )
//         }
//         }
//           return numeroPares
//         }
        


// // // EXERCÍCIO 06
// function retornaNumerosMaior(array) {
//     let retornaNumerosMaior= [0]
//     for (let i = 0; i < array.length; i ++) { 
//         if (array[i] > retornaNumerosMaior) {   
//         retornaNumerosMaior = array[i] 
//     }
//     }
//       return retornaNumerosMaior
//     }
  

// // // EXERCÍCIO 07
// function retornaObjetoEntreDoisNumeros(num1, num2) {
// let maiorNumero = o
// if (num1 > num2) {

//     maiorNumero = num1
// } else {
//     maiorNumero = num2
// }
// let menorNumero = 0 
// if (num1 < num2) {
//     menorNumero = nem1
// } else {
//     menorNumero = num2
// }
//  let maiorDivisivelPorMenor = maiorNumero % menorNumero === 0
//  let diferenca = maiorNumero - menorNumero
// let objeto = {
// maiorNumero: maiorNumero,
// maiorDivisivelPorMenor: maiorDivisivelPorMenor,
// diferenca: diferenca
// }


// // // EXERCÍCIO 08

// function retornaNPrimeirosPares (n) {
// let numeroPares = [];
// for (let i = 0; numeroPares.length < n; i ++) {
//     if (i % 2 === 0) {
//         numeroPares.push(i)
//     }
// }
// return numeroPares
// }
   

// // // EXERCÍCIO 09
// function classificaTriangulo(ladoA, ladoB, ladoC) {
// if (ladoA === ladoB && ladoA === ladoC && ladoB === ladoC) {
//     return "Equilatero"
// }
// if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
//     return "isosceles"
// }
// if (ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC) {
// return "Escaleno"
// }


// // // EXERCÍCIO 10
// function retornaSegundoMaiorESegundoMenor(array) {
//     array.sort((a, b) => a - b)
// const segundoMenos = array [1]
// const segundoMaior = array[array.length - 2]

// return [segundoMaior, segundoMenor]
// }



// // // EXERCÍCIO 11
// function retornaChamadaDeFilme(filme) {
   
// function retornaChamadaDeFilme(filme) {
// filme = {
//     nome:"O Diabo Veste Prada",
//     ano:2006,
//     diretor: 'David Frankel',
//     atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']


// }
// return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor}, e estreiado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}`
// }



// // // EXERCÍCIO 12
// function retornaPessoasAutorizadas(pessoa) {
// let novoObjeto = {
//     ...pessoa,
//     nome: "Anônimo"
// }
// return novoObjeto

// }



// // // EXERCÍCIO 13A
// function retornaPessoasAutorizadas(pessoas) {
//     const pessoasAutorizadas = pessoas.filter((pessoa) => {
//         if (pessoa.idade > 14 && pessoa.idade < 60 && pessoa.altura >= 1.5 ) {
//             return pessoa 
//         }   
//      })
//      return pessoasAutorizadas
// }
   



// // // EXERCÍCIO 13B
// function retornaPessoasNaoAutorizadas(pessoas) {
//     const pessoasNaoAutorizadas = pessoas.filter((pessoa) => {
//         if (pessoa.idade <= 14 || pessoa.idade >= 60 || pessoa.altura < 1.5 ) {
//             return pessoa 
//         }   
//      })
//      return pessoasNaoAutorizadas
// }
   

// // // EXERCÍCIO 14
// function retornaContasComSaldoAtualizado(contas) {
//     contas.forEach((conta) => {
//         let totalCompras = 0;
//         conta.compras.forEach((compra) => {
//             totalCompras = totalCompras + compra
//         })
//         conta.saldoTotal = conta.saldoTotal - totalCompras
//         return conta.compras =[]
//     });
//     return contas
// }


// // // // EXERCÍCIO 15A
// function retornaArrayOrdenadoAlfabeticamente(consultas) {
// consultas.sort(function(a, b) {
//     if (a.nome < b.nome) {
//         return - 1
//     } else {
//         return + 1
//     }
// })
// return consultas
// }

// // EXERCÍCIO 15B
// function retornaArrayOrdenadoPorData(consultas) {
   
// }