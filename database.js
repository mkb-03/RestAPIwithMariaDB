const mariaDB = require('mariadb')

const pool = mariaDB.createPool({
    host: 'localhost',
    user: 'root',
    password: '123',
    connectionLimit: '5',
    database : 'mydb'

})

exports.getPerson = async function (){
    let conn 
    try {
        conn = await pool.getConnection()
        const rows = await conn.query("SELECT * FROM person")
        return rows

    } catch (err) {
        throw err
    } finally {
        if(conn) conn.end() // release pool
    }
}