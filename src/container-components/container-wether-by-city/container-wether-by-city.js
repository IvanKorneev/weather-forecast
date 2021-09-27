import React, {useState} from "react";
import WeatherByCity from "../../components/weather-by-city";
import {connect} from "react-redux";
import { fetchWeatherByCity} from "../../store/actions";


const ContainerWeatherByCity = ({weatherByCity,fetchWeatherByCity}) => {

    const [search, test]= useState('');
    const onChangeLabel = (e) => {
       test(e.target.value)
    }
    const onSubmitNameCity = (e) => {
        e.preventDefault()
        fetchWeatherByCity(search);
        test('')
    }
    return (
        <div>
            <WeatherByCity onChangeLabel={() => onChangeLabel}
                           onSubmitNameCity={() => onSubmitNameCity}
                           search={search}
                           weatherByCity={weatherByCity}

            />
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        weatherByCity: state.weatherByCity
    }
};
const mapDispatchToProps = {
    fetchWeatherByCity
}
export default connect(mapStateToProps, mapDispatchToProps)(ContainerWeatherByCity);
