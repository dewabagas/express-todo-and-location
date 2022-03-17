const Pool = require('pg').Pool

const pool = new Pool ({
    user : '',
    host: 'localhost',
    database: 'my_todos_db',
    password: ''
})


module.exports = pool