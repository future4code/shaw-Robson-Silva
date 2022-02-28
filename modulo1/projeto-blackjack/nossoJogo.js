
console.log("Boas vindas ao jogo BlackJack")
//Segundo passo: Crie um confirm pergutando ao usuário.
const iniciarRodada = confirm("Quer iniciar uma nova rodada")
// Terceiro passo: Se o usuário apertar cancel, finalizara o jogo.
if (iniciarRodada) {

    let usuarioCartaUm = comprarCarta() // funcao para comprar carta que a Labenu forneceu.
    let usuarioCartaDois = comprarCarta()
    let somaUsuario = usuarioCartaUm.valor + usuarioCartaDois.valor

    let pcCartaUm = comprarCarta()
    let pcCartaDois = comprarCarta()
    let somaPc = pcCartaUm.valor + pcCartaDois.valor

    console.log(`Usuário - cartas: ${usuarioCartaUm.texto} ${usuarioCartaDois.texto}  - pontuação ${somaUsuario}`)

    console.log(`computador - cartas: ${pcCartaUm.texto} ${pcCartaDois.texto}  - pontuação ${somaPc}`)
if (somaUsuario > somaPc) {
    console.log("O usuario ganhou!")
} else if (somaPc > somaUsuario) {
    console.log("O computador ganhou!")
 } else {
    console.log("Empate!")
    }

} else {
    console.log("O jogo acabou")
} 

