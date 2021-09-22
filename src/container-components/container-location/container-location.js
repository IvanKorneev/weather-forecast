import React, {useEffect} from "react";
import {connect} from "react-redux";
import {fetchLocation} from "../../store/actions";
import Location from "../../components/location";


const ContainerLocation = ({weatherData, fetchLocation}) => {
    const {name, weather, coord, main, wind} = weatherData.weatherData;


    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            fetchLocation(position.coords.latitude, position.coords.longitude)
        })

    }, [fetchLocation]);

    return (
        <div>
            <Location city={name} weather={weather} coord={coord} main={main} wind={wind}/>
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
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainerLocation);