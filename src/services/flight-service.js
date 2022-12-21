const { FlightRepository, AirplaneRepository } = require('../repository/index');
const { compareTime } = require('../utils/helper');


class FlightService {
   constructor() {
       this.flightRepository = new FlightRepository();
       this.airplanerepository = new AirplaneRepository();
   }
   async createFlight(data){
    try {
        if (!compareTime(data.arrivalTime,data.departureTime)){
               throw new Error("Arrival time can't be less then the depature time.");
        }
        const airplane = await this.airplanerepository.getAirplane(data.airplaneId);
        const flight = await this.flightRepository.createFlight({
            ...data,totalSeats:airplane.capacity
        });
        return flight;
    } catch (error) {
        console.log("Something went wrong in the service layer!");
        throw(error);
    }
   }
}

module.exports = FlightService;