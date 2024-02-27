let jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let indiceAtual = 0;

const getVezJogador = () => {
    if (jogadores.length === 0) {
        return "Não há jogadores no jogo.";
    }
    const nomeDoJogador = jogadores[indiceAtual % jogadores.length];
    indiceAtual++;
    return `É a vez de ${nomeDoJogador} jogar!`;
};

const removerJogador = (indice) => {
    if (indice < 0 || indice >= jogadores.length) {
        return `Não existe jogador no índice informado (${indice}) para ser removido.`;
    }
    jogadores.splice(indice, 1);
    if (indice <= indiceAtual) {
        indiceAtual--;
    }
    return jogadores;
};

const adicionarJogador = (nome, indice) => {
    const nomeFormatado = nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();

    if (isNaN(indice)) {
        jogadores.push(nomeFormatado);
    } else {
        if (indice < 0 || indice > jogadores.length) {
            return `O índice informado (${indice}) não existe no array. Novo jogador não foi adicionado.`;
        }
        jogadores.splice(indice, 0, nomeFormatado);
    }
    return jogadores;
};

module.exports = { getVezJogador, removerJogador, adicionarJogador };
