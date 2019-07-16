const axios = require('axios')
const dotenv = require('dotenv');
dotenv.config();

const getWeather = async (lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY_OPEN_WEATHER}&units=metric`)
    return resp.data.main.temp
}

module.exports = {
    getWeather
}