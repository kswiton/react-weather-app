import styles from './styles/app.module.css';
import styles2 from './styles/app2.module.css';
import { useState, useEffect} from "react";
import SearchBar from './components/SearchBar';
import Weather from './components/Weather';
import Forecast from './components/Forecast';
import CardWeather from './components/CardWeather';



function App() {

const [weatherData, setWeatherData] = useState('')
const [location, setLocation] = useState('')
const styl = location ? styles.container : styles2.container

useEffect(() => {
  document.title = `${location} React Weather App`
}, [location]);

return (
  <div className={styl}>
    <SearchBar searchLocationProp={(fetchedData) => setWeatherData(fetchedData)} locationProp={(locationInput) => setLocation(locationInput)} />
    { location ? <Weather weatherData={weatherData} /> : '' }
    { location ? <Forecast location={location} /> : '' }

  </div>
  );
}

export default App;
