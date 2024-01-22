const axios = require("axios");
const uuid = require('uuid')
const {resultModel} = require("../models/resultModel");
const domains = ['prod-protuner.samishop.pe', 'prod-kawasaki.samishop.pe', 'prod-croslandstore.samishop.pe'];

async function scheduledTest() {
    for (const domain of domains) {
        await speedTest(domain)
    }
}

async function speedTest(domain) {
    const url = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://${domain}&key=${process.env.API_KEY}`;

    try {
        const response = await axios.get(url);

        const newResult = {
            domain: domain,
            date: new Date().toISOString(),
            testId: uuid.v4(),
            performance: response.data.lighthouseResult.categories.performance.score
        };

        await new resultModel(newResult).save();
    } catch (error) {
        console.error(`Error en speedTest para el dominio ${domain}:`, error.message);
    }
}

module.exports = {scheduledTest}