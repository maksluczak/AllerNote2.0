const Location = require("../models/Location");
const User = require("../models/User");
const PollenData = require("../models/PollenData");

const getPollenDataFromExternalAPI = async (req, res) => {
    try {
        const locationId = req.params.pollenLocationId;
        const location = await Location.findById(locationId).exec();

        if (!location) {
            return res.status(404).json({ message: "Nie znaleziono lokalizacji" });
        }

        const longitude = location.longitude;
        const latitude = location.latitude;
        const timezone = "Europe/Berlin";

        const hourlyParams = [
            "alder_pollen",
            "birch_pollen",
            "grass_pollen",
            "mugwort_pollen",
            "olive_pollen",
            "ragweed_pollen"
        ].join(",");

        const url = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${latitude}&longitude=${longitude}&hourly=${hourlyParams}&timezone=${timezone}`;

        const response = await fetch(url);
        if (!response.ok) {
            const text = await response.text();
            return res.status(response.status).json({ error: "Błąd API Open-Meteo", details: text });
        }

        const data = await response.json();

        console.log(data);
    } catch (err) {
        res.status(500).json({ error: err });
    }
}

const handlePollenDataForUser = async (req, res) => {
    const userId = req.user;
    const user = await User.findById(userId).exec();

    if (!user) {
        res.status(204).json({ message: "No user matches id" });
    }
    
    const locationId = req.params.pollenLocationId;
    const date = req.params.pollenDataDate;

    const { alderPollen, birchPollen, grassPollen, mugwortPollen, olivePollen, regweedPollen } = req.body;

    const pollenData = await PollenData.create({
        date: date,
        alderPollen: alderPollen,
        birchPollen: birchPollen,
        grassPollen: grassPollen,
        mugwortPollen: mugwortPollen,
        olivePollen: olivePollen,
        regweedPollen: regweedPollen,
        pollenDataUser: user._id,
        pollenDataLocation: locationId
    });

    return res.status(201).json({ data: pollenData });
}

module.exports = {
    getPollenDataFromExternalAPI,
    handlePollenDataForUser
}
