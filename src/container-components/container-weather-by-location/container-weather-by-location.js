import React, {useEffect} from "react";
import {connect} from "react-redux";
import {fetchLocation} from "../../store/actions";
import WeatherByLocation from "../../components/weather-by-location";


const ContainerWeatherByLocation = ({weatherData, fetchLocation}) => {
    const {name, weather, coord, main, wind} = weatherData.weatherData;

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            fetchLocation(position.coords.latitude, position.coords.longitude)
        })
    }, [fetchLocation]);

    return (
        <div>
            <WeatherByLocation city={name} weather={weather} coord={coord} main={main} wind={wind}/>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        weatherData: state.weather
    }
};
const mapDispatchToProps = {
    fetchLocation
};

export default connect(mapStateToProps, mapDispatchToProps)(ContainerWeatherByLocation);