import styles from '../styles/weather.module.css';
import styles2 from '../styles/weather2.module.css';


const Weather = ({weatherData}) => {
const styl = weatherData ? styles.weather : styles2.weather
return (
    <div className={styl}>
    <div>
    {weatherData ? <h2>Current weather</h2> : ''}
    {weatherData ? <p>City: {weatherData.name} {weatherData.country}</p> : ''}
    {weatherData ? <p>Temperature: {weatherData.temp}</p> : ''}
    {weatherData ? <p>Humidity: {weatherData.humid}</p> : ''}
    {weatherData ? <p>Clouds: {weatherData.cloud}</p> : ''}
    {weatherData ? <p>Wind: {weatherData.windDeg} {weatherData.windSpeed}</p> : ''}
    </div>
    <div className={styles.iconcontainer}>
        <img src="../../clouds.svg" alt ='clouds' className={styles.icon}/>
        
        </div>
    </div>
)
}
export default Weather;