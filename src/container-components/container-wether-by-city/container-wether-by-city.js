import React from "react";
import WeatherByCity from "../../components/weather-by-city";
import {connect} from "react-redux";


const ContainerWeatherByCity = ({weatherByCity}) => {
    console.log(weatherByCity)
    return (
        <div>
            <WeatherByCity/>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        weatherByCity: state.weatherByCity
    }
};
export default connect(mapStateToProps) (ContainerWeatherByCity);
