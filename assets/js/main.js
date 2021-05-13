function jogo() {

    let npontosJogador = 0;
    let npontosPC = 0;
    let computador;


    return {

        pontosj: document.querySelector('.pontosj'),
        pontospc: document.querySelector('.pontospc'),
        ganhador: document.querySelector('.ganhador'),
        escolhapc: document.querySelector('.escolhapc'),

        inicia() {
            this.computaPonto();
            this.fazEscolhaPC();
        },

        fazEscolhaPC() {
            computador = Math.round(Math.random() * (3 - 1) + 1);
            if (computador === 1) {
                computador = 'pedra';
            } else if (computador === 2) {
                computador = 'papel';
            } else {
                computador = 'tesoura';
            }
        },


        computaPonto() { //Registra o ponto de cada equipe de acordo com o botão clicado
            document.addEventListener('click', function (e) {
                const el = e.target;
                if (el.classList.contains('pedra')){
                    if (computador === 'pedra'){
                        this.ganhador.innerHTML = 'Empate'
                        this.escolhapc.value = computador;
                    } else if (computador === 'papel'){
                        this.pontuacaoPC();
                        this.ganhador.innerHTML = ''
                    } else {
                        this.pontuacaoJogador();
                        this.ganhador.innerHTML = ''
                    }
                } else if (el.classList.contains('papel')){
                    if (computador === 'pedra'){
                        this.pontuacaoJogador();
                        this.ganhador.innerHTML = ''
                    } else if (computador === 'papel'){
                        this.ganhador.innerHTML = 'Empate'
                        this.escolhapc.value = computador;
                    } else {
                        this.pontuacaoPC();
                        this.ganhador.innerHTML = ''
                    }
                } else if (el.classList.contains('tesoura')){
                    if (computador === 'pedra'){
                        this.pontuacaoPC();
                        this.ganhador.innerHTML = ''
                    } else if (computador === 'papel'){
                        this.pontuacaoJogador();
                        this.ganhador.innerHTML = ''
                    } else {
                        this.ganhador.innerHTML = 'Empate'
                        this.escolhapc.value = computador;
                    }
                }
                this.fazEscolhaPC();
            }.bind(this));
        },


        pontuacaoJogador() { //Ponto jogador
            npontosJogador += 1;
            this.pontosj.value = npontosJogador;
            this.escolhapc.value = computador;

        },

        pontuacaoPC() { //Função para computar os pontos da equipe Pato
            npontosPC += 1;
            this.pontospc.value = npontosPC;
            this.escolhapc.value = computador;

        }


    };
}

const comecajogo = jogo();

comecajogo.inicia();