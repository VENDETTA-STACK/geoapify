const geolib = require("geolib");
const geoapifyService = require('../services/geoapify');

const calculateDistance = (lat1, lon1, lat2, lon2) => {
    // let lon1 = cityCoordinates["lon"];
    // let lat1 = cityCoordinates["lat"];
    // let lon2 = orderCityCoordinates["lon"];
    // let lat2 = orderCityCoordinates["lat"];

    let R = 6371; // km

    let x1 = lat2 - lat1;
    let dLat = (x1 * Math.PI) / 180;
    let x2 = lon2 - lon1;
    let dLon = (x2 * Math.PI) / 180;
    let a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let result = R * c;
    result = result.toFixed();
    return result;
}

module.exports = {
    getAllData: async (req, res) => {
        try {
            const data = await geoapifyService.getCountryStateCity();

            return res.status(200).json({ IsSuccess: true, Data: data, Message: 'Data found' })
        } catch (error) {
            return res.status(500).json({ IsSuccess: false, Message: error.message });
        }
    },

    getCalculatedDistance: async (req, res) => {
        try {
            const { fromLocation, toLocation } = req.body;

            if (!fromLocation) {
                return res.status(400).json({ IsSuccess: false, Data: [], Message: 'From location is not defined' });
            }

            if (!toLocation) {
                return res.status(400).json({ IsSuccess: false, Data: [], Message: 'To location is not defined' });
            }

            let fromCoordinates = await geoapifyService.getLocationCoordinator(fromLocation.country, fromLocation.state, fromLocation.city);
            let toCoordinates = await geoapifyService.getLocationCoordinator(toLocation.country, toLocation.state, toLocation.city);

            console.log(fromCoordinates, toCoordinates);

            let distance = calculateDistance(fromCoordinates.latitude, fromCoordinates.longitude, toCoordinates.latitude, toCoordinates.longitude);

            console.log(distance);

            if (distance) {
                return res.status(200).json({ IsSuccess: true, Data: distance, Message: 'Distance calculated' });
            } else {
                return res.status(400).json({ IsSuccess: false, Data: [], Message: 'Distance not calculated' });
            }
        } catch (error) {
            return res.status(500).json({ IsSuccess: false, Message: error.message });
        }
    }
}