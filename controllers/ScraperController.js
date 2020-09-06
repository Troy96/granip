const Scraper = require('images-scraper');

class ScraperController {

    google = new Scraper({
        puppeteer: {
          headless: true,
          args: [
            'no-sandbox',
            'disable-setuid-sandbox',
          ]
        }
      });

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
            throw new Error(err)
        }
    }


}

module.exports = {
    ScraperController
}