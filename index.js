const express = require('express');
const app = express();

app.use(express.json())


app.get('/calc1/:qtdbolsoes', (request, response) => {
    const qtdbolsoes = request.params.qtdbolsoes
    let resultado
    resultado = qtdbolsoes * 1 + 1
        response.json({
            resultado,
        })
})

app.get('/calc2/:qtdsetas?/:qtdnos?', (request, response) => {
    const qtdsetas = request.params.qtdsetas
    const qtdnos = request.params.qtdnos
    let resultado
    resultado = qtdsetas - qtdnos * 1 + 2
        response.json({
            resultado,
        })
})

app.get('/calc3/:qtdesvios', (request, response) => {
    const qtdesvios = request.params.qtdesvios
    let resultado
    resultado = qtdesvios * 1 + 1
        response.json({
            resultado,
        })
})


app.listen(10000, () => {
    console.log('Servidor rodando na porta 30000.')
})