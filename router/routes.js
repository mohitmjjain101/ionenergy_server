module.exports = app =>{
    const sensor = require('./../controller/sensor.controller.js')
    app.get('/getDataByTimestamp', sensor.findByTimestamp);
    app.post('/uploadFile', sensor.uploadDataByFile)
    app.post('/saveData', sensor.saveData)
}
