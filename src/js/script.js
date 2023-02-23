const jogoVelha = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];
let jogador = 'O';
let contadorDeJogadas = 0;
let posicoesVitoriosas = [];

window.onload = function () {
    const botaoReiniciar = document.querySelector("a");
    const listElement = document.querySelectorAll("#jogo > div");
    const vezJogador = document.querySelector("h1");
    let fimJogo = false;
    let jogadorDois = 0;
    let jogadorUm = 0;

    function checarVitoria() {
        for (let i = 0; i < 3; i++) {
            if (jogoVelha[0][i] != '' && jogoVelha[0][i] == jogoVelha[1][i] && jogoVelha[1][i] == jogoVelha[2][i]) {
                posicoesVitoriosas.push(i + 1)
                posicoesVitoriosas.push(i + 4)
                posicoesVitoriosas.push(i + 7)
                return jogoVelha[0][i];
            }
            if (jogoVelha[i][0] != '' && jogoVelha[i][0] == jogoVelha[i][1] && jogoVelha[i][1] == jogoVelha[i][2]) {
                posicoesVitoriosas.push((i * 3) + 1)
                posicoesVitoriosas.push((i * 3) + 2)
                posicoesVitoriosas.push((i * 3) + 3)
                return jogoVelha[i][0];
            }

        }
        if (jogoVelha[0][0] != ''
            && jogoVelha[0][0] == jogoVelha[1][1]
            && jogoVelha[1][1] == jogoVelha[2][2]) {
            posicoesVitoriosas = [1, 5, 9]
            return jogoVelha[0][0];
        }
        if (jogoVelha[2][0] != ''
            && jogoVelha[2][0] == jogoVelha[1][1]
            && jogoVelha[1][1] == jogoVelha[0][2]) {
            posicoesVitoriosas = [7, 5, 3]
            return jogoVelha[2][0];
        }
        return '';
    }
    function clickElement(elementoClicado) {
        if (!fimJogo) {
            const item = elementoClicado.target;
            const numeroItem = item.dataset.item;
            const linha = Math.floor((numeroItem - 1) / 3);
            const coluna = (numeroItem - 1) % 3;

            if (item.textContent == '') {
                contadorDeJogadas++;
                jogoVelha[linha][coluna] = jogador;
                item.textContent = jogador;
                const jogadorVencedor = checarVitoria();

                if (jogadorVencedor != '') {
                    if (jogadorVencedor == 'X') {
                        fimJogo = true;
                        for (let i = 0; i < posicoesVitoriosas.length; i++) {
                            const atributoElemento = `[data-item="${posicoesVitoriosas[i]}"]`;
                            document.querySelector(atributoElemento).style.color = 'red';
                        }
                        vezJogador.textContent = `O jogador vencedor é "${jogadorVencedor}"!`
                        botaoReiniciar.classList.add("aberto")
                        return
                    }
                    else {
                        fimJogo = true;
                        for (let i = 0; i < posicoesVitoriosas.length; i++) {
                            const atributoElemento = `[data-item="${posicoesVitoriosas[i]}"]`;
                            document.querySelector(atributoElemento).style.color = 'red';
                        }
                        vezJogador.textContent = `O jogador vencedor é "${jogadorVencedor}"!`
                        botaoReiniciar.classList.add("aberto")
                        return
                    }
                }
                else if (contadorDeJogadas == 9) {
                    fimJogo = true;
                    vezJogador.textContent = `Deu velha!`
                    botaoReiniciar.classList.add("aberto")
                    return
                }

                if (jogador == "O") {
                    jogador = "X"
                }
                else {
                    jogador = "O"
                }
                vezJogador.textContent = `O jogador da vez é "${jogador}"`
            }
        }
    }

    for (let i = 0; i < listElement.length; i++) {
        listElement[i].addEventListener('click', clickElement)
    }
};
