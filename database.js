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

// POST request query 

exports.addPerson = async function (params){
    let {name, age, salary} = params
    let conn 
    try {
        conn = await pool.getConnection()
        const res = await conn.query("INSERT INTO person (name, age, salary) VALUES (?,?,?) ", [name , age, salary])
        return {id_person: parseInt(res.inertId)}

    } catch (err) {
        throw err
    } finally {
        if(conn) conn.end() // release pool
    }
}