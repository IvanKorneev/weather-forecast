import React from "react";
import './app.css'
import HeaderNavbar from "../header-navbar/header-navbar";
import ContainerWeatherCity from "../../container-components/container-wether-by-city";
import ContainerWeatherByLocation
    from "../../container-components/container-weather-by-location/container-weather-by-location";

const App = () => {
    return (
        <div>
            <HeaderNavbar/>
            <ContainerWeatherByLocation/>
            <ContainerWeatherCity/>
        </div>
    )
}
export default App;