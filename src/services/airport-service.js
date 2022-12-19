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
}
module.exports = AirportService;