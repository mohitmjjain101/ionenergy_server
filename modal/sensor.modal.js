const client = require('./db.js')
const dbConfig = require('../config/db.config.js')
const Sensor = function (sensor) {
    this.timestamp = sensor.timestamp;
    this.value = sensor.value
}

Sensor.uploadDataByFile = async (element, result) => {
    await client.connect();
    const database = client.db(dbConfig.DB_NAME);
    var bulk = database.collection(dbConfig.COLLECTION_NAME).initializeOrderedBulkOp();
    for (var i = 0; i < element.length; i++) {
        console.log(i)
        bulk.insert(element[i])
    }
    let data = await bulk.execute(async function (err, response) {
        await client.close();
        if(err){
            result(err , null);
        }else {
            result(null , "Data Saved Successfully")
        }
    });

    
}

Sensor.findByTimeStamp = async (startTime, endTime, result) => {
    await client.connect();
    const database = client.db(dbConfig.DB_NAME);
    
    database.collection(dbConfig.COLLECTION_NAME).find({ ts: { $gt: startTime , $lt : endTime } }).toArray(async function(err, response) {  
        // await client.close();
        if(err){
            console.log(err)
            result(err , null)
        }else {
            result(null,  response)
        }
    })

}

Sensor.saveData = async (element , result ) =>{
    await client.connect();
    const database = client.db(dbConfig.DB_NAME);
    var bulk = database.collection(dbConfig.COLLECTION_NAME).initializeOrderedBulkOp();
    for (var i = 0; i < element.length; i++) {
        bulk.insert(element[i])
    }
    let data = await bulk.execute(async function (err, response) {
        // await client.close();
        if(err){
            console.log(err)
            result(err , null);
        }else {
            result(null , "Data Saved Successfully")
        }
    });
    
}

module.exports = Sensor;