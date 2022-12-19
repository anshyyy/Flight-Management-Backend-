const { Airport } = require('../models/index')
const { Op } = require('sequelize');

class AirportRepository {
    async createAirport(data) {

        console.log("repo",data);
        try {
            
            const airport = await Airport.create({name,address,ciytId});
            return airport;

        } catch (error) {
            console.log("Something went wrong in the repository layer!");
            throw (error);
        }
    }
}
module.exports = AirportRepository;