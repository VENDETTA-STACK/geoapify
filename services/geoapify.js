const countryStateCityModel = require('../models/country-state-city');

module.exports = {
    getCountryStateCity: async () => {
        let data = await countryStateCityModel.find();

        return data;
    },

    getLocationCoordinator: async (country, state, city) => {
        let coordinates = await countryStateCityModel.aggregate([
            { 
                $match: { 
                    "name": country 
                } 
            }, // Match the country
            { 
                $unwind: "$states" 
            }, // Unwind the states array
            { 
                $match: { 
                    "states.name": state 
                } 
            }, // Match the state
            { $unwind: "$states.cities" }, // Unwind the cities array
            { 
                $match: { 
                    "states.cities.name": city
                } 
            }, // Match the city
            { 
                $project: { 
                    _id: 0, 
                    latitude: "$states.cities.latitude", 
                    longitude: "$states.cities.longitude" 
                } 
            }
        ]);

        return coordinates;
    }
}