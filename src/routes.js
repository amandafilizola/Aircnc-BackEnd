const express = require('express');
const SessionController = require('./controllers/SessionController')
const SpotController = require('./controllers/SpotController')
const multer = require('multer');

const routes = express.Router();
const uploadConfig = require('./config/upload');
const upload = multer(uploadConfig);
routes.post('/sessions', SessionController.store);
routes.post('/spots', upload.single('thumbnail'),SpotController.store);

module.exports = routes;