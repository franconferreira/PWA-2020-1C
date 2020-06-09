const dbModel = require('./../utils/db');

getHeroes = async () => {
    try {
        const dbo = await dbModel.pool();
        const collection = await dbo.collection(process.env.C_HEROE)
                                    .find()
                                    .toArray()
        return collection;
    } catch (error) {
        throw error;
    }
}

getHeroe = async (id) => {
    try {
        let filter = {nombre : 1,bio : 1,aparicion : 1, img : 1, casa : 1, id : 1, _id : 0}
        const dbo = await dbModel.pool();
        const collection = await dbo.collection(process.env.C_HEROE)
                                    .findOne(
                                        {id : id},
                                        {projection : filter}
                                    )
        return collection;
    } catch (error) {
        throw error;
    }
}

createHeroe = async(obj) =>{
    try {
        const dbo = await dbModel.pool();
        const collection = await dbo.collection(process.env.C_HEROE)
                                    .insertOne(obj);
        return collection
    } catch (error) {
        throw error;
    }
}
module.exports = {
    getHeroes,
    getHeroe,
    createHeroe
}