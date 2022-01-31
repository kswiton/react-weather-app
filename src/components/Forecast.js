import React, {useState, useEffect} from "react";
import styles from '../styles/forecast.module.css';

import axios from 'axios'


const Forecast = (blablabla) => {

    
const [forecast, setForecast] = useState('')
useEffect(() => {
    
    console.log(blablabla.location)
    axios
    .get(`https://api.openweathermap.org/data/2.5/forecast?q=${blablabla.location}&appid=43fe38a4d560f5939eda3db924493b03`)
    .then(res => {
    console.log(res)
    // const forecastData = {
    //     day1: {temp: res.data.list[7].main.temp},
    //     day2: {temp: res.data.list[14].main.temp},
    //     day3: {temp: res.data.list[21].main.temp}
    // //     }
    // setForecast(forecastData)
    
    })
    .catch(err => {
    console.log(err)
    })
}, [blablabla.location])

return (
    <div className={styles.forecast}>
        <p>Forecast temp:</p>
      


    </div>
)
}
export default Forecast;