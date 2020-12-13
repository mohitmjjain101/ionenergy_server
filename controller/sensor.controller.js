const Sensor = require('./../modal/sensor.modal.js')
var Busboy = require('busboy');
const e = require('express');

exports.uploadDataByFile = (req, res) => {

    console.log(req.files.file)
    if (!req) {
        res.status(400).send(
            {
                message: 'No Data Found'
            }
        )
    } else {
        let data = JSON.parse(req.files.file.data.toString('utf8'))
        console.log(data)
        Sensor.uploadDataByFile(data, (err, data) => {
            if (err) {
                res.status(400).send(
                    {
                        message: 'Something Went Wrong'
                    }
                )
            } else {
                res.status(200).send(
                    {
                        message: 'Data Saved Successfully'
                    }
                )
            }
        })
    }
}

exports.findByTimestamp = (req, res) => {

    if (!req.body) {
        res.status(400).send(
            {
                message: 'Please provide Timestamp'
            }
        )
    }
    else {
        let startTime = req.body.startTime;
        let endTime = req.body.endTime;
        console.log(startTime, endTime)
        Sensor.findByTimeStamp(startTime, endTime, (err, data) => {
            if (err) {
                res.status(500).send({
                    message: err
                })
            }else {
                res.status(200).send({
                    "data": data
                })
            }
            
        })
    }
}

exports.saveData = (req, res) => {
    if (!req) {
        res.status(400).send(
            {
                message: 'No Data Found'
            }
        )
    } else {
        let data = req.body.data
        console.log(data)
        Sensor.saveData(data, (err, data) => {
            if (err) {
                res.status(400).send(
                    {
                        message: 'Something Went Wrong'
                    }
                )
            } else {
                res.status(200).send(
                    {
                        message: 'Data Saved Successfully'
                    }
                )
            }
        })
    }
}
