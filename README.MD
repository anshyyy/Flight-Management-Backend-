#Welcome to Flights Service

## Project Setup
- Clone the project on your local
- Execute `npm install` on the same path as of your root directory of the download project.
- Create a `.env` file in the root directory and add the following environment variable.
- `PORT = 3000`
- Inside the `src/config` folder create a new file `config.json` and then add the following piece of json

```
{
  "development": {
    "username": <YOUR DB LOGIN NAME>,
    "password": <YOUR DB PASSWORD>,
    "database": "Flight_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```
- Once you've added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create`

## DB DESIGN
  - Airplane Table
  - Flight
  - Airport
  - City

  - A flight belongs to an airplane but one airplane can be used in many flights.
  - A city has many airports but one airport belongs to a city.
  - One airport can have many flights, but a flight belongs to one airport.

  ## Tables

  ### City -> id,name, created_at, updated_at
  ### Airport -> id,name,address,city_id,created_at,updated_at
        Realtionship -> City has many airports and Airports belongs to a city (one to many).

  ```
  npx sequelize model:generate --name Airport --attributes name:String,address:String,cityId:integer
  ```
   

   ## There are basically 4 services :
   - [Auth Service](https://github.com/anshyyy/Auth_Service) 
   - [Flight and search Service](https://github.com/anshyyy/Flight-Management-Backend-)
   - [Email and ticket Reminder Service](https://github.com/anshyyy/Email-Remainder-Service)
   - [Booking Service](https://github.com/anshyyy/Booking-service)
   - [API Gateway](https://github.com/anshyyy/API-Gateway)

  

![chart](https://user-images.githubusercontent.com/73778637/215174043-0f2d8fc1-4760-4fbc-95c7-70069298d198.png)