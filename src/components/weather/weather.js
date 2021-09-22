import React from "react";
import './weather.sass';

const Weather = ({item, coord, city, main, wind}) => {
    const {description, icon} = item;
    return (
        <div className='weather'>
            <div className='weather-img'>
                <img src={`https://openweathermap.org/img/wn/${icon}.png`} alt='weather'/>
            </div>
            <div className='weather-wrapper'>
                <div className='weather-title'>
                    <h1>{city}</h1>
                    <span>{description}</span>
                </div>
                <div className='weather-information'>
                    <p><span>{main.temp}</span> temperature from {main.temp_min} to {main.temp_max}°С,
                        wind {wind.speed} m/s.</p>
                </div>
                <div className='weather-geo-coords'>
                    <p>Geo coords [{coord.lon} {coord.lat}]</p>

                </div>
            </div>

        </div>
    )
}
export default Weather;
