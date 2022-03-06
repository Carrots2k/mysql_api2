const mysql = require('mysql');

const pool = mysql.createPool({
   
    password: 'IWRmwk=k7zx]',
    user: 'Gert',
    database: 'pearhpmszm_db3',
    host: '197.242.158.1',
   
})

let chirprdb = {};

chirprdb.all = () => {

    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM pearhpmszm_db3.Beat`,(err,results) =>
        {
            if(err){
                return reject(err);
            }

            return resolve(results);
        });
    });
};

chirprdb.one = (id) => {
    return new Promise((resolve,reject) => {
        pool.query(`SELECT * FROM pearhpmszm_db3.Beat WHERE id = ?`,[id],(err,results) =>
        {
            if(err){
                return reject(err);
            }
            return resolve(results[0]);
        });
    });
}

module.exports = chirprdb;