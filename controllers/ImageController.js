const { ScraperController } = require('./ScraperController');
const { ImageRepo } = require('../models/image-repo');
const { EmailController } = require('./EmailController');

const { CONSTANTS } = require('../constants');

class ImageController {

    scraper = new ScraperController();
    emailer = new EmailController();

    constructor() {
    }

    /**
     * Fetches the images using the scraper for the given topic
     */
    async fetchImages() {
        return new Promise(async resolve => {
            const imagesScraped = await this.scraper.fetchImages(CONSTANTS.SEARCH.TOPIC, CONSTANTS.SEARCH.LIMIT);
            return resolve(imagesScraped);
        });
    }

    /**
     * Selects one image out of input images based on whether previously sent or not
     * @param {Array<{ url: String, source: String, description: String}>} images 
     */
    async selectImageToBeSent(images) {
        return new Promise(async resolve => {
            for (let i = 0; i < images.length; i++) {
                const { url } = images[i];
                const imageUsed = await ImageRepo.find({ link: url }).countDocuments();

                if (imageUsed) continue;
                await ImageRepo.create({
                    link: url
                });

                return resolve(url);
            }
        })
    }

    /**
     * Send image link as attachment to user
     * @param {String} link 
     */
    async sendImage(link) {
        this.emailer.send(
            CONSTANTS.EMAIL.RECEPIENT,
            `Your daily ${CONSTANTS.SEARCH.TOPIC} image is here`,
            `Hey <b>${CONSTANTS.EMAIL.RECEPIENT}</b>,
        <br/>    
        <br/>
            Kindly find attached your daily dose of image for your registered search topic.
        <br/>
        <br/>
            Have a good day ahead. :),
        <br/>
        <br/>
            Best,
            <br/>
            Granip`,
            [{ path: link }]
        )
    }

    /**
     * Initialize
     */
    async start() {
        try {
            const images = await this.fetchImages();
            const imageLink = await this.selectImageToBeSent(images);
            await this.sendImage(imageLink);
        } catch (err) {
            console.log(err)
        }
    }


}

module.exports = {
    ImageController
}