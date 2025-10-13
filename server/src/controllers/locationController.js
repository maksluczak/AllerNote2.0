const Location = require('../models/Location');

const createLocation = async (req, res) => {
    const { voivodeship, longitude, latitude } = req.body;

    if (!voivodeship || !longitude || !latitude) {
        return res.status(400).json({
            message: "Latitude and longitude are required"
        })
    }

    try {
        const duplicateLocation = await Location.findOne({ voivodeship }).exec();

        if (duplicateLocation) {
            res.status(409).json({ message: "Location already exists "});
        }
        const location = await Location.create({
            voivodeship: voivodeship,
            longitude: longitude,
            latitude: latitude
        });
        
        return res.status(201).json({
            message: "Location added successfully.",
            location: location
        });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
}

const getLocationByVoivodeshipName = async (req, res) => {
    try {
        const voivodeship = req.params.voivodeship;
        if (!voivodeship) {
            return res.status(400).json({ message: "Voivodeship name is required." });
        }

        const location = await Location.findOne({ voivodeship }).exec();
        if (!location) {
            return res.status(404).json({ message: "Location not found." });
        }

        return res.status(200).json({ 
            message: "Location found", 
            id: location._id, 
            location 
        });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
}

module.exports = {
    createLocation,
    getLocationByVoivodeshipName
}