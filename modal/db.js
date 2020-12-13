// const Cassandra = require('cassandra-driver');
const dbConfig = require('../config/db.config.js')
// var connection = new Cassandra.Client({
//     contactPoints: [dbConfig.CS_CONTACTPOINTSWITHPORT],
//     localDataCenter: dbConfig.CS_DATACENTER,
//     keyspace: dbConfig.CS_KEYSPACE
// });


// module.exports = connection;

var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/iontest";
var url = `${dbConfig.URL}${dbConfig.DB_NAME}`;

// var connection = MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     console.log("Database created!");
//     db.close();
//   });

const connection = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true});

module.exports = connection;