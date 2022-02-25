/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
// Projeto de Fixação: Blackjack



// console.log("Bem-vindo(a) ao jogo de blackjack")

// let jogo = confirm("Quer iniciar uma nova rodada?")

if (jogo) {
    let card1Usuario = comprarCartas()
    let card2Usuario = comprarCartas()
    let card1Pc = comprarCartas()
    let card2Pc = comprarCartas()

    let pontuacaoUsuario = card1Usuario.valor + card2Usuario.valor
    let pontuacaoPc = card1Pc.valor + card2Pc.valor

    console.log(`Usuário - cartas: ${card1Usuario.texto} ${card2Usuario.texto} - ${pontuacaoUsuario}`)
    console.log(`Computador - cartas: ${card1Pc.texto} ${card2Pc.texto} - ${pontuacaoPc}`)

    if (pontuacaoUsuario > pontuacaoPc) {
        console.log("O usuário ganhou!")
    } else if (pontuacaoPc > pontuacaoUsuario) {
        console.log("O computador ganhou!")
    } else if (pontuacaoUsuario === pontuacaoPc) {
        console.log("Empate!")
    }

} else {
    console.log("O jogo acabou")
}
