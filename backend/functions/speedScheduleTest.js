const axios = require("axios");
const uuid = require('uuid')
const {resultModel} = require("../models/resultModel");
const domains = ['protuner.pe', 'kawasaki.com.pe', 'croslandstore.com.pe', 'rok.pe'];

async function scheduledTest() {
    for (const domain of domains) {
        await speedTest(domain)
    }
}

async function speedTest(domain) {
    const url_desktop = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://${domain}&strategy=desktop&key=${process.env.API_KEY}`;
    const url_mobile = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://${domain}&strategy=mobile&key=${process.env.API_KEY}`;

    try {
        const [response_desktop, response_mobile] = await Promise.all([
            axios.get(url_desktop),
            axios.get(url_mobile)
        ]);

        const newResult = {
            domain: domain,
            date: new Date().toISOString(),
            testId: uuid.v4(),
            performance_desktop: response_desktop.data.lighthouseResult.categories.performance.score,
            performance_mobile: response_mobile.data.lighthouseResult.categories.performance.score
        };

        await new resultModel(newResult).save();
    } catch (error) {
        console.error(`Error en speedTest para el dominio ${domain}:`, error.message);
    }
}

module.exports = {scheduledTest}