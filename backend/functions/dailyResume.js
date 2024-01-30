const {resultModel} = require("../models/resultModel");
const {resumeModel} = require("../models/resumeModel");
const uuid = require("uuid");
const domains = ['protuner.pe', 'kawasaki.com.pe', 'croslandstore.com.pe', 'rok.pe'];

async function generateDailyResume() {
    for (const domain of domains) {
        await domainResume(domain)
    }
}

async function domainResume(domain) {
    try {
        let sum_desktop = 0
        let sum_mobile = 0
        const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();

        const dailyResults = await resultModel.find({domain: domain, date: {$gte: twentyFourHoursAgo}}, {
            __v: 0,
            _id: 0
        }, null).exec()

        for (const result of dailyResults) {
            sum_desktop += result.performance_desktop
            sum_mobile += result.performance_mobile
        }

        const prom_desktop = sum_desktop / dailyResults.length
        const prom_mobile = sum_mobile / dailyResults.length

        const newResume = {
            domain: domain,
            date: new Date().toISOString(),
            resumeId: uuid.v4(),
            dailyScore_desktop: prom_desktop.toFixed(2),
            dailyScore_mobile: prom_mobile.toFixed(2)
        }

        await new resumeModel(newResume).save()

    } catch (error) {
        console.log(`[ERROR] No se pudo generar el resumen diario para ${domain}`)
    }
}

module.exports = {generateDailyResume}