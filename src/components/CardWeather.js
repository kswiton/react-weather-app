import React from "react";
import styles from '../styles/cardweather.module.css';

const CardWeather = ({forecast}) => {
return (
    <div className={styles.container}>
    
    {forecast ? (forecast.map(({dt_txt})=>(

    <div className={styles.card}>
        {dt_txt.substring(0, 10)}
    
    </div>

    ))) : ''}
    
</div>
)
}

export default CardWeather;