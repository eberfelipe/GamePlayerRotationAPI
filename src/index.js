const express = require('express');
const { getVezJogador, removerJogador, adicionarJogador } = require('./controller');
const { capturarIndice } = require('./middleware');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.send(getVezJogador());
});

// Aplicando o middleware capturarIndice para as rotas que precisam dele
app.use('/remover', capturarIndice);
app.use('/adicionar', capturarIndice);

app.get('/remover', (req, res) => {
    // Usando req.indice diretamente, já processado pelo middleware
    res.json(removerJogador(req.indice));
});

app.get('/adicionar', (req, res) => {
    const nome = req.query.nome;
    // req.indice pode ser undefined, o que é tratado na função adicionarJogador
    res.json(adicionarJogador(nome, req.indice));
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
