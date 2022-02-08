import React, {useState, useEffect} from "react";
import axios from 'axios'
import CardWeather from './CardWeather';

const Forecast = ({location}) => {
const [forecast, setForecast] = useState()

useEffect(
function fetchForecast() {
    axios
    .get(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=43fe38a4d560f5939eda3db924493b03&units=metric`)
    .then(res => {
        console.log(res)
        const forecastData = res.data.list
        setForecast(forecastData)
    })
    .catch(err => {
        console.log(err)
    })
}, [location])

return (
    <CardWeather forecast={forecast}/>
   
)}
export default Forecast;