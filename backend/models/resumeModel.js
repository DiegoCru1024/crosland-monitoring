const mongoose = require('mongoose')

const resumeSchema = new mongoose.Schema({
    domain: {type: String, required: true},
    date: {type: Date, required: true},
    resumeId: {type: String, required: true},
    dailyScore: {type: Number, required: true}
})

const resumeModel = new mongoose.model("resume", resumeSchema)

module.exports = {resumeModel}