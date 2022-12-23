const { CityService } = require('../services/index');

const cityService = new CityService();

const create = async (req, res) => {
    // console.log("inside city-controller->",req.body.title);
    try {
        const city = await cityService.createCity(req.body);
        return res.status(SuccessCodes.CREATED).json({
            data: city,
            success: true,
            message: 'Successfully created a city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: 'Not able to create a city',
            err: error
        });
    }
}

const createMultiple = async(req,res) => {
    try {

        // console.log("Controller",req.body);
        const response = await cityService.createMultiple(req.body);
        return res.status(SuccessCodes.CREATED).json({
            data : response,
            success: true,
            message: "Successfully created multiple cities",
            err : {}
         });
        
    } catch (error) {
        console.log(error);
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: 'Not able to create multiple city',
            err: error
        });
    }
}

// DELETE. -> /city/:id
const destroy = async (req, res) => {
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(SuccessCodes.CREATED).json({
            data: response,
            success: true,
            message: 'Successfully deleted a city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: 'Not able to delete the city',
            err: error
        });
    }
}

// GET -> /city/:id
const get = async (req, res) => {
    try {
        const response = await cityService.getCity(req.params.id);
        return res.status(SuccessCodes.CREATED).json({
            data: response,
            success: true,
            message: 'Successfully fetched a city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: 'Not able to get the city',
            err: error
        });
    }
}

// Patch -> /city/:id -> req.body
const update = async (req, res) => {
    try {
        const response = await cityService.updateCity(req.params.id, req.body);
        return res.status(SuccessCodes.CREATED).json({
            data: response,
            success: true,
            message: 'Successfully fetched a city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: 'Not able to update the city',
            err: error
        });
    }
}


const getAll = async(req,res) => {
    try {

        const cities = await cityService.getAllCities(req.query);
        return res.status(SuccessCodes.CREATED).json({
            data : cities,
            success : true,
            message : "Successfully fetched the cities!",
            err : {}
        });
        
    } catch (error) {
        console.log(error);
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data : {},
            success : false,
            message : 'Not able to fetch the cities!',
            err : error
        });
        
    }
}

module.exports = {
    create,
    destroy,
    get,
    update,
    getAll,
    createMultiple
}