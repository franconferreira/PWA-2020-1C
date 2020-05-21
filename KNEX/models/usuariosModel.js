const knex = require('./../bd');

async function getUsers() {
    try {
        let result = await knex('usuario')
                           .select('id_usuario','nombre');
        return result;
    } catch(error) {
        throw error;
    }
}
async function login(objUsuario) {
    try {
        // esto se entiende ? xD
        let result = await knex('usuario')
                           .where('mail',objUsuario.usuario).andWhere('password',objUsuario.password)
                           .select('id_usuario','permisos');
    // [{id_usuario : 1, permisos : 0}]    
    return result; 
    } catch(error) {
        throw error;
    }
}

async function createUser(object) {
    try {
        // object : las propiedades del objeto coincidir con lso campos de la tabla
        let result = knex('usuario')
                    .insert(object);
        return result; 

    } catch(error) {

    }
}

module.exports = {
    getUsers
}