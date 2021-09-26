import weather from './weather'
import {combineReducers} from "redux";
import weatherByCity from './weather-by-city'

const rootReducer = combineReducers({
    weather,
    weatherByCity

});
export default rootReducer;