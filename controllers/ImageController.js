const { ScraperController } = require('./ScraperController');
const { ImageRepo } = require('../models/image-repo');
const { EmailController } = require('./EmailController');

const { CONSTANTS } = require('../constants');

class ImageController {

    scraper = new ScraperController();
    emailer = new EmailController();
    link

    constructor() {
    }

    async initialize() {
        try {
            //Get Images
            const imagesScraped = await this.scraper.fetchImages(CONSTANTS.SEARCH.TOPIC, CONSTANTS.SEARCH.LIMIT);

            //Select the Image To Be Sent
            for (let i = 0; i < imagesScraped.length; i++) {
                const { url } = imagesScraped[i];
                const imageUsed = await ImageRepo.find({ link: url }).countDocuments();

                if (imageUsed) continue;
                this.link = url;
                await ImageRepo.create({
                    link: url
                });

                break;
            }

            //Send Image To User
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
                [{ path: this.link }]
            )
        } catch (err) {
            console.log(err)
        }
    }


}

module.exports = {
    ImageController
}