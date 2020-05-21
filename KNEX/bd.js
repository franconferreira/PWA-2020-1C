const knex = require('knex')({
    client : 'mysql',
    connection : {
        host : 'localhost',
        user : 'root',
        password : '',
        database : 'noticias'
    },
    pool : {min : 2, max:8}
})

module.exports = knex;