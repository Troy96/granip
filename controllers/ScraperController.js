const Scraper = require('images-scraper');

class ScraperController {

    google = new Scraper({});

    constructor() {
    }

    /**
     * 
     * @param {String} topic 
     * @param {Number} limit 
     */
    async fetchImages(topic, limit = 100) {

        try {
            const results = await this.google.scrape(topic, limit);
            return results;
        } catch (err) {

        }
    }


}

module.exports = {
    ScraperController
}