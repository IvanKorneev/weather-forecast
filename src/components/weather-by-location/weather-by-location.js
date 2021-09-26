import React from "react";
import './weather-by-location.sass';
import Weather from "../weather";

const WeatherByLocation = ({city, weather = [], coord, main, wind}) => {

    const elements = weather.map((item, index) => {
        return (
            <li key={index + 1}>
                <Weather item={item} coord={coord} city={city} main={main} wind={wind}/>
            </li>
        )
    })
    return (
        <div className='location'>
            {elements}
        </div>
    )
}
export default WeatherByLocation;

