import { useEffect, useState } from 'react';
import styles from '../styles/weather.module.css';


const Weather = ({weatherData}) => {
const [image, setImage] = useState(<img src="../../rain.svg" alt ='rain' className={styles.icon}/>)

useEffect(()=>{setImage(`http://openweathermap.org/img/wn/${weatherData.code}@2x.png`)},[weatherData])

       
return (
    <div className={styles.weather}>
    <div>
    <h2>Current weather</h2>
    <p>City: {weatherData.name} {weatherData.country}</p>
    <p>Temperature: {weatherData.temp}</p>
    <p>Humidity: {weatherData.humid}</p>
    <p>Clouds: {weatherData.cloud}</p>
    <p>Wind: {weatherData.windDeg} {weatherData.windSpeed}</p>
   </div>
    <div className={styles.iconcontainer}>
        <img src={image} alt='weather icon' className={styles.icon}/>
        </div>
    </div>
)
}
export default Weather;