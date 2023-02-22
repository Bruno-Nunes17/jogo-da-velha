const jogoVelha = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];
let jogador = 'O';

window.onload = function () {
    const listElement = document.querySelectorAll("#jogo > div");
    function checarVitoria(){
        for(let i = 0; i<3; i++){
            if(jogoVelha[0][i] != '' && jogoVelha[0][i] == jogoVelha[1][i] && jogoVelha[1][i] == jogoVelha[2][i]){
                return jogoVelha[0][i];
            }
            if(jogoVelha[i][0] != '' && jogoVelha[i][0] == jogoVelha[i][1] && jogoVelha[i][1] == jogoVelha[i][2]){
                return jogoVelha[i][0];
            }
            
        }
        if(jogoVelha[0][0] != '' 
            && jogoVelha[0][0] == jogoVelha[1][1] 
            && jogoVelha[1][1] == jogoVelha[2][2]){
                return jogoVelha[0][0];
            }
            if(jogoVelha[2][0] != '' 
            && jogoVelha[2][0] == jogoVelha[1][1] 
            && jogoVelha[1][1] == jogoVelha[0][2]){
                return jogoVelha[2][0];
            }
        return '';
    }
    function clickElement(elementoClicado) {
        const item = elementoClicado.target;
        const numeroItem = item.dataset.item;
        const linha = Math.floor((numeroItem - 1) / 3);
        const coluna = (numeroItem - 1) % 3;

        if (item.innerText == '') {
            jogoVelha[linha][coluna] = jogador;
            item.innerText = jogador;
            const jogadorVencedor = checarVitoria();

            if(jogadorVencedor != ''){

                alert(`O campeão foi o jogador ${jogadorVencedor}`)
                return
            }

            if (jogador == "O") {
                jogador = "X"
            }
            else {
                jogador = "O"
            }

        }

    }

    for (let i = 0; i < listElement.length; i++) {
        listElement[i].addEventListener('click', clickElement)
    }

};