const dbModel = require('./db')

async function getPersonalInfo() {
	try {
		let dbo = await dbModel.pool();
		const rows = await dbo.collection('me').find().toArray();
		return rows;
	} catch(error) {
		throw error;
	}
}

module.exports = {getPersonalInfo}

