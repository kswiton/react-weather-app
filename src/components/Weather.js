import styles from '../styles/weather.module.css';


const Weather = ({weatherData}) => {

return (
    <div className={styles.weather}>
    <p>City: {weatherData.name} {weatherData.country}</p>
    <p>Temperature: {weatherData.temp}</p>
    <p>Humidity: {weatherData.humid}</p>
    <p>Clouds: {weatherData.cloud}</p>
    <p>Wind: {weatherData.windDeg} {weatherData.windSpeed}</p>
      


    </div>
)
}
export default Weather;