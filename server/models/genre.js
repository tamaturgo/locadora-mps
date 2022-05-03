const connect = require('../struct/connection')
const moment = require('moment');

class Genre {
    //#region inseção
    adiciona(req, res) {

        const sql = 'INSERT INTO Genre SET ?'

        const film = {
            ...req
        }
        // gen_name:
        connect.query(sql, film, (error, result) => {
            if (error) {
                res.status(400).json(error)
            } else {
                res.status(201).json(result)
            }
        })
    }

//#endregion
//#region Busca
lista(res) {
    const sql = "SELECT * FROM Genre";
    connect.query(sql, (error, result) => {
        if (error) {
            res.status(400).json(error);
        } else {
            res.status(200).json(result)
        }
    })
}

buscaID(id, res) {
    const sql = `SELECT * FROM Genre WHERE gen_id_pk = ${id}`;

    connect.query(sql, (error, result) => {
        const atendimento = result[0]

        if (error) {
            res.status(400).json(error);
        } else {
            res.status(200).json(atendimento)
        }
    })
}
//#endregion
//#region Atualizações

updateId(id, valores, res) {


    const sql = `UPDATE Genre SET ? WHERE gen_id_pk=?`;
    connect.query(sql, [valores, id], (error, result) => {
        if (error) {
            res.status(400).json(error)
        } else {
            res.status(200).json(result)
        }
    })


}

//#endregion

//#region Delete
deleta(id, res) {
    const sql = `DELETE FROM Film WHERE fim_id_pk = ${id}`;
    connect.query(sql, (error) => {
        if (error) {
            res.status(400).json(error);
        } else {
            res.status(200).json(id)
        }
    })
}

//#endregion

}

module.exports = new Genre