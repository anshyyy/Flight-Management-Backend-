const { AirportService } = require('../services/index');

const airportService = new AirportService();

const create = async (req, res) => {
     console.log("inside city-controller->",req.body);
    try {
        const city = await airportService.createAirport(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: 'Successfully created a airport',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to create a airport',
            err: error
        });
    }
}
module.exports = {
    create
}