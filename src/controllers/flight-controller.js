const {FlightService} = require('../services/index');
const {SucessCodes, ServerErrorCodes,ClientErrorCodes, SuccessCodes } = require('../utils/error_codes');

const flightService = new FlightService();

const create = async(req,res) => {
     try {
        const flightRequestData = {
            flightNumber : req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId : req.body.arrivalAirportId,
            arrivalTime : req.body.arrivalTime,
            departureTime : req.body.departureTime,
            price : req.body.price 
        }

        const flight = await flightService.createFlight(flightRequestData);
        return res.status(SuccessCodes.CREATED).json({
            data : flight,
            message :"Successfully created a flight!",
            success:true,
            error: {}
        });
        
     } catch (error) {
        console.log(error);
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data : {},
            success: false,
            message: "Not able to create a flight",
            err : error
        });
     }
}
const getAllFlight = async(req,res) => {
    try {
       const flight = await flightService.getAllFlights(req.body);
       return res.status(SuccessCodes.CREATED).json({
           data : flight,
           message :"Successfully created a flight!",
           success:true,
           error: {}
       });
       
    } catch (error) {
       console.log(error);
       return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
           data : {},
           success: false,
           message: "Not able to get all flight",
           err : error
       });
    }
}


module.exports = {
    create,
    getAllFlight,
}
