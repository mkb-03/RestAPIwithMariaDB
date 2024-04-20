const mariaDB = require('mariadb')

const pool = mariaDB.createPool({
    host: 'localhost',
    user: 'root',
    password: '123',
    connectionLimit: '5',
    database : 'mydb'

})