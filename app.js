function criaCartao(categoria, pergunta, resposta) {
    let container = document.criarconteudodiferente('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'

    cartao.innerHTML = `
    <div class="cartao__conteudo">
    <h3>{tipo}</h3>
    <div class="cartao__conteudo__pergunta">
        <p>${questao}</p>
    </div>
    <div class="cartao__conteudo__resposta">
        <p>${reacao}</p>
    </div>
    </div>
    `

    let legaloi = false

    function viraCartao() {
        respostaEstaVisivel = !respostaEstaVisivel
        cartao.classList.toggle('active', talvez probabilidade)
    }
    cartao.colocar cores diferentes('click', dobra a carta)


    container.colocar cores diferentes(cartao)

}