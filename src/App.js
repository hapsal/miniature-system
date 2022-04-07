import './App.css'
import { useState, useEffect } from 'react';

const App = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [weatherData, setWeatherData] = useState([]);
  const [forecastData, setForecastData] = useState([]);

  // Current Weather API: https://api.openweathermap.org/data/2.5/weather?id={CITY ID}&appid={API key}
  // IDS: Tampere: 634963, Jyväskylä: 655195, Kuopio: 650225, Espoo: 660129
  // 
  // Forecast weather API: https://api.openweathermap.org/data/2.5/forecast?id={CITY ID}&appid={API key}
  useEffect(() => {
    fetch("")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setWeatherData(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  console.log(weatherData)

  //let unixDate = new Date(weatherData.dt * 1000).toISOString()
  //const convertedDate = new Intl.DateTimeFormat('fi-FI', {dateStyle: 'full', timeStyle: 'long'}).format(unixDate)

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
  return(
    <div class="container">
    <div class="header">
        <h1>Säätutka</h1>
      </div>
      <div class="dropdown">
        <form action="#">
          <label>Kaupunki</label>
          <select name="city"> 
            <option value="Tampere">Tampere</option>
            <option value="Jyväskylä">Jyväskylä</option>
            <option value="Kuopio">Kuopio</option>
            <option value="Espoo">Espoo</option>
          </select>
        </form>
      </div>
      <div>
        <h2>Kaupunki</h2>
        <p>Säätiedot (Tämänhetkinen)</p>
        <ul>
          <li>{weatherData.name}</li>
          <li>Temp: {weatherData.main.temp} °C</li>
          <li>Wind: {weatherData.wind.speed} m/s</li>
          <li>Humidity: {weatherData.main.humidity} %</li>
          <li>{weatherData.weather[0].description} 
            <img
              src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
              alt="weather status icon"
              className="weather-icon"
            />
          </li>
        </ul>
      </div>
      <div>
        <h2>3h ennusteet</h2>
        <ul>
        </ul>
      </div>
    </div>
  )
  }
}


export default App;
