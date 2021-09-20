const axios = require("axios");

const _apiKey = `aeee6b2ec2bdfab0338f32f801a63d20`




export const getLocation = async (_lat, _long) => {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${_lat}&lon=${_long}&appid=${_apiKey}`)
        return response.data
    } catch (err) {
        console.error(err.toJSON())
    }
};
export const getWeatherCity  = async (data)=>{
    try {
        const response = await  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=${_apiKey}`)
        return response.data
    }catch (err){
        console.error(err.toJSON())
    }
}


