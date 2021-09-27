import React from "react";
import './weather-by-city.sass';

const WeatherByCity = ({onChangeLabel, onSubmitNameCity, search,weatherByCity}) => {

    return (
        <div className='weather-by-city'>
            <form onSubmit={onSubmitNameCity()}>
                <div className='weather-by-city-container'>
                <input type='text' placeholder='Type City' onChange={onChangeLabel()} value={search}/>
                <button>Search</button>
                </div>
            </form>
        </div>
    )
}
export default WeatherByCity;