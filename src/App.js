import styles from './styles/app.module.css';
import styles2 from './styles/app2.module.css';
import { useState, useEffect} from "react";
import SearchBar from './components/SearchBar';
import Weather from './components/Weather';
import Forecast from './components/Forecast';


function App() {

const [weatherData, setWeatherData] = useState('')
const [location, setLocation] = useState('')
const styl = location ? styles.container : styles2.container

useEffect(()=> {
  if (location === '') return;
  let request = {
    query: `${location}`,
    fields: ['photos'],
  };

  let placesService = new window.google.maps.places.PlacesService(document.createElement('div'));
  
  placesService.findPlaceFromQuery(request, (results) => {
    const photo = results[0].photos[0].getUrl()
    document.body.style.backgroundImage = `url(${photo})`;
  });

}, [location])

return (
  <div className={styl}>
    
    <SearchBar searchLocationProp={(fetchedData) => setWeatherData(fetchedData)} locationProp={(locationInput) => setLocation(locationInput)} />
    { location ? <Weather weatherData={weatherData} /> : '' }
    { location ? <Forecast location={location} /> : '' }
  </div>
  )
}

export default App;
