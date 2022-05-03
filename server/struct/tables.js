class Tables{
    init(con){
        this.connect = con;
        this.createFilms();
        this.createCopy();
        this.createGenre();
    }
    
    createFilms(){
        const sql = 'CREATE TABLE IF NOT EXISTS Film (fim_id_pk int NOT NULL AUTO_INCREMENT, title varchar(80) NOT NULL,   fim_banner_pic varchar(100), fim_year int, fim_amount int, fim_description text, fim_price DECIMAL,  PRIMARY KEY(fim_id_pk)) ';
        this.connect.query(sql, (error) =>{
            if(error){
                console.log(error)
            }else{
                console.log("######### Tabela de Filmes criada ############");
            }
        })
    }
    createCopy(){
        const sql = 'CREATE TABLE IF NOT EXISTS Film_copy (cop_barcode_pk int NOT NULL, fim_id_fk int NOT NULL,   cop_status int,  PRIMARY KEY(cop_barcode_pk)) ';
        this.connect.query(sql, (error) =>{
            if(error){
                console.log(error)
            }else{
                console.log("######### Tabela de Copias criada ############");
            }
        })
    }
    createGenre(){
        const sql = 'CREATE TABLE IF NOT EXISTS genre (gen_id_pk int NOT NULL AUTO_INCREMENT, gen_name varchar(50),  PRIMARY KEY(gen_id_pk)) ';
        this.connect.query(sql, (error) =>{
            if(error){
                console.log(error)
            }else{
                console.log("######### Tabela de Gêneros criada ############");
            }
        })
    }
}

module.exports = new Tables 


