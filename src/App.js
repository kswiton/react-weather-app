import styles from './styles/app.module.css';
import { useState, } from "react";
import SearchBar from './components/SearchBar';
import Weather from './components/Weather';



function App() {

const [weatherData, setWeatherData] = useState('')

return (
  <div className={styles.container}>
    <SearchBar searchLocationProp={(fetchedData) => setWeatherData(fetchedData)}/>
    <Weather weatherData={weatherData} />
    

  </div>
  );
}

export default App;
