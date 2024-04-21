const mariaDB = require('mariadb')

const pool = mariaDB.createPool({
    host: 'localhost',
    user: 'root',
    password: '123',
    connectionLimit: '5',
    database : 'mydb'

})

// GET all persons query 
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
        const res = await conn.query("INSERT INTO person (name, age, salary) VALUES (?, ?, ?)", [name , age, salary])
        return {id_person: parseInt(res.inertId)}

    } catch (err) {
        throw err
    } finally {
        if(conn) conn.end() // release pool
    }
}


// UPDATE query for person
exports.updatePerson = async function (id_person, params){
    let {name, age, salary} = params
    let conn
    try {
        conn = await pool.getConnection()
        const res = await conn.query("UPDATE person SET name = ? , age = ? , salary = ? WHERE id_person = ?", [name , age, salary, id_person])
        return {affected: parseInt(res.affectedRows)}

    } catch (err) {
        throw err
    } finally {
        if(conn) conn.end() // release pool
    }
}


// DELETE query for person
exports.deletePerson = async function (id_person){
    
    let conn
    try {
        conn = await pool.getConnection()
        const res = await conn.query("DELETE FROM person where id_person = ?", [id_person])
        return {affected: parseInt(res.affectedRows)}

    } catch (err) {
        throw err
    } finally {
        if(conn) conn.end() // release pool
    }
}
