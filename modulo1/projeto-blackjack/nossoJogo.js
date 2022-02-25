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



let jogo = confirm("Quer iniciar uma nova rodada?")

if (jogo) {
    let carta1User1 = comprarCarta()
    let carta2User1 = comprarCarta()
    let card1Pc = comprarCarta()
    let card2Pc = comprarCarta()

    let pontuacaoUsuario = carta1Usuario.valor + carta2Usuario.valor
    let pontuacaoPc = carta1Pc.valor + carta2Pc.valor

    console.log(`Usuário - cartas: ${carta1User.texto} ${carta2User.texto} - ${pontuacaoUsuario}`)
    console.log(`Computador - cartas: ${carta1Pc.texto} ${carta2Pc.texto} - ${pontuacaoPc}`)

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
