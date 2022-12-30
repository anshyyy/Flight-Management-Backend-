const { Flights } = require('../models/index');
const { Op } = require('sequelize');

class FlightRepository {

    #createFilter(filter) {
        let filterObject = {}

        if (filter.arrivalAirpoortId) {
            filterObject.arrivalAirpoortId = filter.arrivalAirpoortId;
        }
        if (filter.departureAirportId) {
            filterObject.departureAirportId = filter.departureAirportId;
        }
        if (filter.minPrice && filter.maxPrice) {
            Object.assign(filterObject, {
                [Op.and]:
                    [{ price: { [Op.gte]: filter.minPrice } },
                    { price: { [Op.lte]: filter.maxPrice } }
                    ]
            });
        }
        if (filter.minPrice && !filter.maxPrice) {
            Object.assign(filterObject, { price: { [Op.gte]: filter.minPrice } });


            
        }
        if (filter.maxPrice && !filter.minPrice) {
            Object.assign(filterObject, { price: { [Op.lte]: filter.maxPrice } });
        }
        console.log(filterObject);
        return filterObject;
    }
    async createFlight(data) {
        try {
            // console.log("repo",data);
            const flight = await Flights.create(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer!");
            throw (error);
        }
    }
    async getFlight(flightId) {

        try {
            const flight = await Flights.findByPk(flightId);
            return flight;
        } catch (error) {
            console.log("SOmething went wrong in the flight repo!");
            throw (error);
        }
    }
    async getAllFlight(filter) {
        try {
            const filterObject = this.#createFilter(filter);
            const flight = await Flights.findAll({
                where: filterObject
            })
            return flight;
        } catch (error) {
            console.log("Something went wrong in the Repository layer");
            throw (error);
        }
    }

    async deleteFlight(flightId) {
        try {
            await Flights.destroy({
                where : {
                    id : flightId
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in the Repository layer");
            throw (error);
        }
     }

    async updateFlight(flightId,data) {
        console.log(flightId,data);
        try {
           await Flights.update(data,{
                   where :{
                    id:flightId
                   }
            });
            return true;
        } catch (error) {
            console.log(error);
            console.log("Something went wrong in the Repository layer");
            throw (error);
        }
     }



}

module.exports = FlightRepository;
