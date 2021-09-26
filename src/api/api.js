const axios = require("axios");

const _apiKey = `aeee6b2ec2bdfab0338f32f801a63d20`


export const getWeatherByLocation = async (_lat, _long) => {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${_lat}&lon=${_long}&appid=${_apiKey}&units=metric
`)
        return response.data
    } catch (err) {
        console.error(err.toJSON())
    }
};

export const getWeatherByCity  = async (data)=>{
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=${_apiKey}`)
        return response.data
    } catch (err){
        console.error(err.toJSON())
    }
}




