require('dotenv').config();
require('./db/connection');

const { ImageController } = require('./controllers/ImageController');

const imageController = new ImageController();
imageController.run();

