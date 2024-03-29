const mongoose = require('mongoose')

const resultSchema = new mongoose.Schema({
    domain: {type: String, required: true},
    date: {type: Date, required: true},
    testId: {type: String, required: true},
    performance_desktop: {type: Number, required: true},
    performance_mobile: {type: Number, required: true}
})

const resultModel = new mongoose.model("result", resultSchema)

module.exports = {resultModel}