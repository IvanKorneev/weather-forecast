import React, {useEffect} from "react";
import {connect} from "react-redux";
import {fetchLocation} from "../../store/actions";


const ContainerLocation = ({location, fetchLocation}) => {

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {

            fetchLocation(position.coords.latitude, position.coords.longitude)
        })

    }, []);


    console.log(location, 111)
    return (
        <div>

        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        location: state.location
    }
};
const mapDispatchToProps = {
    fetchLocation
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainerLocation);