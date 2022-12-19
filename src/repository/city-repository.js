const { City } = require('../models/index')
const { Op } = require('sequelize');

class CityRepository{
    async createCity({ name }){
        // console.log("Inside cityrepo ->", {name});
        try {
            //  console.log(name);
            //  console.log({name});
            const city = await City.create({ name })
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer!");
            throw (error);
        }
    }
    async createMultiple(cityList){
       
        try {
            // console.log("repo",cityList);
            for(var i=0;i<cityList.length;i++){
                const c = cityList[i];
                console.log(c)
               await City.create(c);
            }
            return "Done";
        } catch (error) {
            console.log("Something went wrong in the repository layer!");
            throw (error);
        }
    }
    async getAllCities(filter){ // filter can be empty? if empty
                                // it will return all the cities 
                                // else cities like fliter!
        try {
            if(filter.name){
                console.log(filter.name);
                const cities = await City.findAll({
                    where : {
                        name : {
                            [Op.startsWith] : filter.name
                        }
                    }
                });
                return cities;
            }
            const cities = await City.findAll();
            return cities;
        } catch (error) {
            console.log("Something went wrong in the repository layer!");
            throw (error);
        }
    }
    async deleteCity( cityId ){
        console.log({cityId});
        try {
            await City.destroy({
                where:{
                    id: cityId
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in the repository layer!");
            throw(error);
        }
    }
    
    async updateCity(cityId, data){
         try {
            //the below approach also works but will not return updated object
            // const city = await City.update(
            //     data, {
            //         where : {
            //             id:cityId
            //         }
            //     }
            // );
            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();
            return city;
         } catch (error) {
            console.log("Something went wrong in the repository layer!");
            throw(error);
         }
    }
    async getCity(cityId){
       
        try {
            const city = await City.findByPk(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer!");
            throw(error);
        }
    }
}

module.exports = CityRepository;