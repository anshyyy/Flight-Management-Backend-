const { AirportRepository } = require('../repository/index')

class AirportService {
    constructor(){
        this.airportRepository = new AirportRepository();
    }
    async createAirport(data){
        console.log("service",data);
        try {
          
            const airport = await this.airportRepository.createAirport(data);
            return airport;
            
        } catch (error) {
            console.log("Something went wrong at service layer!");
            throw(error);
        }
    }
    async deleteAirport(cityId){
        console.log(cityId);
        try {
            const response = await this.airportRepository.deleteAirport(cityId);
            return response; 
        } catch (error) {
            console.log("Something went wrong at service layer!");
            throw(error);
        }
    }
    async updateAirport(cityId,data){
        try {
            const response = await this.airportRepository.updateAirport(cityId,data);
            return response; 
        } catch (error) {
            console.log("Something went wrong at service layer!");
            throw(error);
        }
    }
    async getAiport(cityId){
        try {
            const response = await this.airportRepository.getAirport(cityId);
            return response; 
        } catch (error) {
            console.log("Something went wrong at service layer!");
            throw(error);
        }
    }
    async getAirportName(AirportId){
        try {
            const response = await this.airportRepository.getAirportName(AirportId);
            return response; 
        } catch (error) {
            console.log("Something went wrong at service layer!");
            throw(error);
        }
    }

}
module.exports = AirportService;