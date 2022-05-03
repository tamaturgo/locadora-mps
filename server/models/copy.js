const connect = require('../struct/connection')

class Copy {
    //#region inseção
    adiciona(req, res) {

        const sql = 'INSERT INTO Film_copy SET ?'

        const film = {
            ...req
        }
        // cop_status
        // fim_id_fk 
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
    const sql = "SELECT * FROM Film_copy";
    connect.query(sql, (error, result) => {
        if (error) {
            res.status(400).json(error);
        } else {
            res.status(200).json(result)
        }
    })
}

buscaID(id, res) {
    const sql = `SELECT * FROM Film_copy WHERE cop_barcode_pk = ${id}`;

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


    const sql = `UPDATE Film_copy SET ? WHERE cop_barcode_pk=?`;
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
    const sql = `DELETE FROM Film_copy WHERE cop_barcode_pk = ${id}`;
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

module.exports = new Copy