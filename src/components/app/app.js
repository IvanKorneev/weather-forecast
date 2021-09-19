import React from "react";
import './app.css'
import HeaderNavbar from "../header-navbar/header-navbar";
import ContainerLocation from "../../container-components/container-location/container-location";

const App = () => {
    return (
        <div>
            <HeaderNavbar/>
            <ContainerLocation/>
        </div>
    )
}
export default App;