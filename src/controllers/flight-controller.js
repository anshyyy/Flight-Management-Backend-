const {FlightService} = require('../services/index');


const flightService = new FlightService();

const create = async(req,res) => {
     try {
        const flight = await flightService.createFlight(req.body);
        return res.status(201).json({
            data : flight,
            message :"Successfully created a flight!",
            success:true,
            error: {}
        });
        
     } catch (error) {
        console.log(error);
        return res.status(500).json({
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
       return res.status(201).json({
           data : flight,
           message :"Successfully created a flight!",
           success:true,
           error: {}
       });
       
    } catch (error) {
       console.log(error);
       return res.status(500).json({
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
