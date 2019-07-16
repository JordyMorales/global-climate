const axios = require('axios')
const dotenv = require('dotenv');
dotenv.config();

const getPlace = async (dir) => {    
    const encodeURL = encodeURI(dir)
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURL}`,
        headers: {'X-RapidAPI-Key': process.env.API_KEY_RAPIDAPI}
    });
    
    const resp = await instance.get()
    
    if ( resp.data.Results.length === 0 ){
            throw new Error(`No results for ${dir}`)
    }

    const data = resp.data.Results[0]
    const direction = data.name
    const lat = data.lat
    const lon = data.lon

    return {
        direction,
        lat,
        lon
    }
}

module.exports = {
    getPlace
}