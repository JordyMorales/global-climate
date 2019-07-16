const { getPlace } = require('./place/place')
const { getWeather } = require('./weather/weather')

const argv = require('yargs').options({
    direction: {
        alias: 'd',
        desc: 'name of the city',
        demand: true
    }
}).argv

const getInfo = async (direction) => {
    try {
        const cords = await getPlace(direction)
        const temp = await getWeather(cords.lat, cords.lon)
        return  `El clima de ${cords.direction} es de ${temp}`
    } catch (e) {
        `No se pudo determinar el clima de ${direction}`
    }   
}

getInfo(argv.direction)
    .then(console.log)
    .catch(console.log)