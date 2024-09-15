const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const ObjectID = mongodb.ObjectId;

let database;
//instead mongoose used mongodb
async function getDatabase() {
    const client = await MongoClient.connect('mongodb://127.0.0.1:27017');
    database = client.db('library');

    if (!database) {
        console.log('Database not connected');
    }

    return database;
}

module.exports = {
    getDatabase,
    //neeeds when we intract with _id
    ObjectID
}