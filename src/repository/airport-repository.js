const { Airport } = require('../models/index')
const { Op } = require('sequelize');
const CrudRepository = require('./crud-repository');

class AirportRepository extends CrudRepository {

    constructor(model){
        super(model);
    }
    async createAirport(data) {

        console.log("repo", data);
        try {
            const airport = await Airport.create(data);
            return airport;

        } catch (error) {
            console.log("Something went wrong in the repository layer!");
            throw (error);
        }
    }
    async deleteAirport(cityId) {
        // console.log(cityId);
        try {
            await Airport.destroy({
                where: {
                    id: cityId
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in the repository layer!");
            throw (error);
        }
    }
    async updateAirport(cityId, data) {
        try {
            
             const airport = await Airport.update(
                data,{
                    where : {
                        id : cityId,
                        cityId : data.cityId
                    }
                }
             );
            // const airport = await Airport.findAll({
            //     where: {
            //         cityId: data.cityId,
            //         id: cityId
            //     }
            // });
            console.log(airport);
            // airport.name = data.name;
            // airport.address = data.address;
            // airport.cityId = data.cityId
            // await airport.save();
            return airport;
        } catch (error) {
            console.log("Something went wrong in the repository layer!");
            throw (error);
        }
    }
    async getAirport(id) {
        try {
            const airport = await Airport.findAll({
                where: {
                    cityId: id
                }
            });
            return airport;
        } catch (error) {
            console.log("Something went wrong in the repository layer!");
            throw (error);
        }
    }
    async getAirportName(id) {
        try {
            const airport = await Airport.findAll({
                where: {
                    id: id
                }
            });
            return airport;
        } catch (error) {
            console.log("Something went wrong in the repository layer!");
            throw (error);
        }
    }

}
module.exports = AirportRepository;