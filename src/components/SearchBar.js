import React, {useState, useEffect} from "react";
import styles from '../styles/searchbar.module.css';
import axios from 'axios'


function SearchBar ({searchLocationProp}) {

    const cities = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Los Angeles', 'Sydney', 'Tokyo', 'Hong Kong', 'Cairo', 'Moscow']
    const [locationInput, setLocationInput] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        if (counter > 10) { setCounter(0) } else {
        setTimeout(() => setCounter(counter + 1), 2000);
        console.log(counter) }
    }, [counter]);
 
    function fetchData() {
        axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${locationInput}&APPID=43fe38a4d560f5939eda3db924493b03&units=metric`)
        .then(res => {
          const fetchedData = {
            name: `${res.data.name}, `, 
            country: res.data.sys.country,
            temp: `${Math.round(res.data.main.temp * 10) / 10}°C`, 
            humid: `${res.data.main.humidity}%`, 
            pres: res.data.main.pressure,
            windDeg: `${res.data.wind.deg}°`, 
            windSpeed: `${res.data.wind.speed}km/h`,
            cloud: res.data.weather[0].description}
        
        console.log(fetchedData)
        searchLocationProp(fetchedData)
        
        })
        .catch(err => {
          console.log(err)
        })
    }

    const handleChange = (e) => {
        setLocationInput(e.target.value)
    }
        
    const handleEnter = (e) => {
        if (e.key === "Enter") handleButtonClick(e);
    }

    const handleButtonClick = (e) => {
        e.preventDefault();
        if (locationInput.trim() === "") return;
        setIsLoading(true)
        fetchData();
        setTimeout(() => {setIsLoading(false)}, 300);   
    }

    return (
        <div className={styles.form}>
            <form onSubmit={handleButtonClick} spellCheck="false">
            <input className={styles.input} type="text" onChange={handleChange} onKeyPress={handleEnter} placeholder={cities[counter]}/>
            <button className={styles.submit} type='submit'>{isLoading ? <img src="../../spinner.svg" alt ='spinner' className={styles.spinner} /> :  <img src="../../search.svg" alt='glass' className={styles.search} /> }</button>
            </form>
        </div>
    );
}

export default SearchBar