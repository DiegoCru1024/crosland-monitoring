const {resultModel} = require("../models/resultModel");
const {resumeModel} = require("../models/resumeModel");
const router = require('express').Router()

router.get('/dashboardData', async (req, res) => {
    try {
        const domainResumes = await resumeModel.find(null, {__v: 0, _id: 0}, null).exec()
        res.status(200).send({message: 'Datos encontrados.', data: domainResumes})
    } catch (error) {
        res.status(500).send({error: error})
    }
})

router.get('/domainData', async (req, res) => {
    const {domain} = req.query

    if (!domain) {
        return res.status(400).send({error: 'Se requiere un dominio válido.'})
    }

    try {
        const domainResults = await resultModel.findOne({domain: domain}, {__v: 0, _id: 0}, null).exec()

        if (!domainResults) {
            return res.status(200).send({message: 'No se encontraron datos.'})
        }

        res.status(200).send({message: 'Datos encontrados.', results: domainResults})
    } catch (error) {
        res.status(500).send({error: error})
    }
})

module.exports = router