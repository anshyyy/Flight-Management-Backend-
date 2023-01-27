const { AirportService } = require('../services/index');

const airportService = new AirportService();

const create = async (req, res) => {
     console.log("inside city-controller->",req.body);
    try {
        const airport = await airportService.createAirport(req.body);
        return res.status(201).json({
            data: airport,
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
const getAirport = async(req,res) => {
   try {
        const airPort = await airportService.getAiport(req.params.id);
        return res.status(201).json({
            data:airPort,
            success:true,
            message:"Successfully fetched a airport!",
            err : {}
        });
   } catch (error) {
    console.log(error);
    return res.status(500).json({
        data: {},
        success: false,
        message: 'Not able to fetch a airport',
        err: error
    });
   }
}

const getAirportName = async(req,res) => {
    try {
         const airPort = await airportService.getAirportName(req.params.id);
         return res.status(201).json({
             data:airPort,
             success:true,
             message:"Successfully fetched a airport!",
             err : {}
         });
    } catch (error) {
     console.log(error);
     return res.status(500).json({
         data: {},
         success: false,
         message: 'Not able to fetch a airport',
         err: error
     });
    }
 }
const deleteAirport = async(req,res)=> {
    try {
         const airport = await airportService.deleteAirport(req.params.id);
         return res.status(200).json({
            data: airport,
            success: true,
            message: 'Successfully deleted a city',
            err: {}
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to delete a airport',
            err: error
        });
    }
}
    const updateAirport = async (req, res) => {
        try {
            const response = await airportService.updateAirport(req.params.id, req.body);
            return res.status(200).json({
                data: response,
                success: true,
                message: 'Successfully patched a airport',
                err: {}
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                data: {},
                success: false,
                message: 'Not able to update the city',
                err: error
            });
        }
}
module.exports = {
    create,
    deleteAirport,
    getAirport,
    updateAirport,
    getAirportName
}