require('dotenv').config();
require('./db/connection');

const { ImageController } = require('./controllers/ImageController');
const { CronController } = require('./controllers/CronController');
const { CONSTANTS } = require('./constants');


(function () {
  const imageController = new ImageController();
  const cron = new CronController();

  cron.run(CONSTANTS.CRON_PATTERN, imageController.start.bind(imageController));
}());

//