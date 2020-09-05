const { ScraperController } = require('./ScraperController');
const { ImageRepo } = require('../models/image-repo');



class ImageController {

    scraper = new ScraperController();

    constructor() {
    }

    async initialize() {
        const imagesScraped = await this.scraper.fetchImages();

        imagesScraped.forEach(
            imageObj => {

                const { url } = imageObj;
                const imageUsed = ImageRepo.find({ link: url }).countDocuments();
                if (imageUsed) return;

                await ImageRepo.create({
                    link: url
                });
                
                //send email
                //run this daily

            }
        )
    }


}

module.exports = {
    ImageController
}