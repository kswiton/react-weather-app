import React, {useState, useEffect} from "react";
import styles from '../styles/forecast.module.css';
import axios from 'axios'
import CardWeather from './CardWeather';


const Forecast = ({location}) => {

const [forecast, setForecast] = useState()
const [time, setTime] = useState(0)
const [disableEarlier, setDisableEarlier] = useState(true);
const [disableLater, setDisableLater] = useState(true);

// const d = new Date();
// let date = d.getDate();
// const daysNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// const monthsNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// let name = monthsNames[d.getMonth()];
// let day = daysNames[d.getDay()];


useEffect(()=>{
    if (time === 0) {setDisableEarlier(true)}
    else {setDisableEarlier(false)}
},[time]);

useEffect(()=>{
    if (time === 36) {setDisableLater(true)}
    else {setDisableLater(false)}
},[time])



const earlierHandler = () => {
    console.log(time)
    setTime(time-1)
    
    
}
const laterHandler = () => {
    console.log(time)
    setTime(time+1)
    
}

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
    <div>
        
    <div className={styles.forecast}>
    <h2>Forecast</h2>
    <div className={styles.container}>
        <div> {forecast ? <button  className={styles.button} disabled={disableEarlier} onClick={earlierHandler}><img src="../../left.svg" alt ='left' className={styles.icon}/></button> : ''}</div>
        <div>

        <p> {forecast ? (forecast[time+1].dt_txt).substring(0, 10) : ''} </p>
        <p> {forecast ? (forecast[time+1].dt_txt).substring(11, 16) : ''} </p>
        {forecast ? <p><img src="../../temp.svg" alt ='temp' className={styles.icon}/> {`${Math.round(forecast[time+1].main.temp * 10) / 10}°C`}</p> : ''}
        {forecast ? <img src={`http://openweathermap.org/img/wn/${forecast[time+1].weather[0].icon}@2x.png`} alt='weather icon'/>  : ''}

        </div>

        <div>
        <p> {forecast ? (forecast[time+2].dt_txt).substring(0, 10) : ''} </p>
        <p> {forecast ? (forecast[time+2].dt_txt).substring(11, 16) : ''} </p>
        {forecast ? <p><img src="../../temp.svg" alt ='temp' className={styles.icon}/> {`${Math.round(forecast[time+2].main.temp * 10) / 10}°C`}</p> : ''}
        <p> {forecast ? <img src={`http://openweathermap.org/img/wn/${forecast[time+2].weather[0].icon}@2x.png`} alt='weather icon'/>  : ''} </p>
        </div>

        <div>
        <p> {forecast ? (forecast[time+3].dt_txt).substring(0, 10) : ''} </p>
        <p> {forecast ? (forecast[time+3].dt_txt).substring(11, 16) : ''} </p>
        {forecast ? <p><img src="../../temp.svg" alt ='temp' className={styles.icon}/> {`${Math.round(forecast[time+3].main.temp * 10) / 10}°C`}</p> : ''}
        <p> {forecast ? <img src={`http://openweathermap.org/img/wn/${forecast[time+3].weather[0].icon}@2x.png`} alt='weather icon'/>  : ''} </p>
        </div>
        <div> {forecast ? <button className={styles.button} disabled={disableLater} onClick={laterHandler}><img src="../../right.svg" alt ='right' className={styles.icon}/></button> : ''}</div>
        </div>
    </div>



{/* <CardWeather forecast={forecast}/> */}



    </div>
)
}
export default Forecast;