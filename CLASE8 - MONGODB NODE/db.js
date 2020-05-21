const MongoClient = require('mongodb').MongoClient;

async function pool() {
  // Connection URL
  const url = 'mongodb://localhost:27017/';
  // Database Name
  const dbName = 'jom';
  let client;
  try {
    // Use connect method to connect to the Server
    client = await MongoClient.connect(url);

    const db = client.db(dbName);
    return db;
  } catch (err) {
    console.log(err.stack);
  }

  if (client) {
    client.close();
  }
}
module.exports = {pool}
