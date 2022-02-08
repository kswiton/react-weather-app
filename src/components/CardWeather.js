import React, {useRef} from "react";
import styles from '../styles/cardweather.module.css';

const CardWeather = ({forecast}) => {

    const scrl = useRef(null);

    const scroll = (scrollOffset) => {
        scrl.current.scrollLeft += scrollOffset;
      };

      
return (
    <div className={styles.top}>
        <div className={styles.buttoncontainer}>
            <div className={styles.buttonOverlayLeft}><button className={styles.button} onClick={() => scroll(-492)}></button></div>
            <div className={styles.buttonOverlayRight}><button className={styles.button} onClick={() => scroll(492)}></button></div>
        </div>
        <div className={styles.arrowContainer}>
            <div className={styles.arrow}><img src="../../left.svg" alt ='left' className={styles.icon}/></div>
            <div className={styles.arrow}><img src="../../right.svg" alt ='right' className={styles.icon}/></div>
        </div>
        
        <div>
            <div><h2>Forecast</h2></div>
            <div className={styles.cardscontainer}  ref={scrl}>
            {forecast ? (forecast.map(({dt_txt, weather, main, dt})=>(
            <div key={dt} className={styles.card}>
                <p>{dt_txt.substring(0, 10)}</p>
                <p>{dt_txt.substring(11, 16)}</p>
                <p><img src="../../temp.svg" alt ='temp' className={styles.icon}/> {`${Math.round(main.temp * 10) / 10}°C`}</p>
                <p><img src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt='weather icon'/></p>
            </div>
            ))) : null}
            </div>
        </div>

        
        

    </div>
)
}

export default CardWeather;