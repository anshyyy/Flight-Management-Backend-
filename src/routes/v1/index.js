const express = require('express');
const CityController = require('../../controllers/city-controller');
const AirportController = require('../../controllers/airPort-controller');
const FlightController = require('../../controllers/flight-controller');
const { FlightMiddlewares } = require('../../middlewares/index');

const router = express.Router();

router.post('/city', CityController.create);
router.post('/airport', AirportController.create);
router.post('/flights', FlightMiddlewares.validateCreateFlight, FlightController.create);
router.post('/cityMultiple', CityController.createMultiple);
router.delete('/city/:id', CityController.destroy);
router.delete('/airport/:id', AirportController.deleteAirport);

router.get('/flights', FlightController.getAllFlight);
router.get('/city/:id', CityController.get);
router.get('/city', CityController.getAll);
router.get('/airport/:id', AirportController.getAirport);
router.patch('/city/:id', CityController.update);
router.patch('/airport/:id', AirportController.updateAirport);

module.exports = router;