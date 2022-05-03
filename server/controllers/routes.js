const Filmes = require('../models/filmes')
const Genres = require('../models/genre')
const Copy = require('../models/copy')
const { application } = require('express')


module.exports = app => {

    //#region Requisições Get
    app.get('/filmes', (req, res) => {
        Filmes.lista(res)
    })
    app.get('/genre', (req, res) => {
        Genres.lista(res)
        })
    app.get('/copy', (req, res) => {
        Copy.lista(res)
    }) 
        

    app.get('/filmes/:id', (req, res) =>{
        
        Filmes.buscaID(req.params.id, res)
    })
    app.get('/genre/:id', (req, res) =>{
        Genres.buscaID(req.params.id, res)
    })
    app.get('/copy/:id', (req, res) =>{
        Copy.buscaID(req.params.id, res)
    })

    //#endregion
    //#region Requisições Post

    app.post('/addfilme', (req, res) =>{
        const filme = req.body
        Filmes.adiciona(filme, res)
    })
    app.post('/addgenre', (req, res) =>{
        const genre = req.body
        Genres.adiciona(genre, res)
        console.log(genre)
        
    })
    app.post('/addcopy', (req, res) =>{
        const copy = req.body
        Copy.adiciona(copy, res)
    })

    //#endregion
    //#region Requisições atualização
    app.patch('/filmes/:id', (req, res) =>{
        const id = parseInt(req.params.id)
        const values = req.body
        Filmes.updateId(id, values, res);
    })
    app.patch('/genre/:id', (req, res) =>{
        const id = parseInt(req.params.id)
        const values = req.body
        Genres.updateId(id, values, res);
    })
    app.patch('/copy/:id', (req, res) =>{
        const id = parseInt(req.params.id)
        const values = req.body
        Copy.updateId(id, values, res);
    })

    //#endregion
    //#region Requisição de delete
    app.delete('/filmes/:id', (req, res) =>{
        const id = parseInt(req.params.id)
        Filmes.deleta(id, res);
    }) 
    app.delete('/genre/:id', (req, res) =>{
        const id = parseInt(req.params.id)
        Genres.deleta(id, res);
    })
    app.delete('/copy/:id', (req, res) =>{
        const id = parseInt(req.params.id)
        Copy.deleta(id, res);
    })
    
    //#endregion
} 