import React from "react";
import './app.css'
import HeaderNavbar from "../header-navbar/header-navbar";
import ContainerLocation from "../../container-components/container-location/container-location";
import ContainerWeatherCity from "../../container-components/container-wether-city";

const App = () => {
    return (
        <div>
            <HeaderNavbar/>
            <ContainerLocation/>
            <ContainerWeatherCity/>
        </div>
    )
}
export default App;