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
    <>
      <header>
        <h1>Säätutka</h1>
      </header>

        <div className='cities'>
          <div class="dropdown">
            <button class="dropButton"> 
              Kaikki kaupungit
            </button>
            <div class="dropdown-content">
              <a href='#'>Tampere</a>
              <a href='#'>Jyväskylä</a>
              <a href='#'>Kuopio</a>
              <a href='#'>Espoo</a>
            </div>
          </div>
        </div>

      <div class="container">
        <article class="grid-item grid-col-span-2">
          <h2>{weatherData.name}</h2>
          <p class="desc">{weatherData.weather[0].description} </p>
        </article>
        <article class="grid-item">
          <img class="current-icon" src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}alt="weather status icon" />
          <p class="temp">{weatherData.main.temp} °C</p>
        </article>
        <article class="grid-item  grid-col-span-2">
          <h3>Päivä</h3>
          <p class="text">11:11</p>
        </article>
        <article class="grid-item">
          <p class="text">Wind: {weatherData.wind.speed} m/s</p>
          <p class="text">Humidity: {weatherData.main.humidity} %</p>
          <p class="text">Precipation (3h): </p>
        </article>
      </div>

      <div className="forecast-container">
        <article class="forecast-item">
          <p>Kello</p>
          <p>Ikoni</p>
          <h4>LT</h4>
          <div class="forecast-extra-info">
            <p>Tuuli</p>
            <p>Kosteus</p>
            <p>5 mm</p>
          </div>
        </article>
        <article class="forecast-item">
          <p>Kello</p>
          <p>Ikoni</p>
          <h4>LT</h4>
          <div class="forecast-extra-info">
            <p>Tuuli</p>
            <p>Kosteus</p>
            <p>5 mm</p>
          </div>
        </article>
        <article class="forecast-item">
          <p>Kello</p>
          <p>Ikoni</p>
         <h4>LT</h4>
          <div class="forecast-extra-info">
            <p>Tuuli</p>
            <p>Kosteus</p>
            <p>5 mm</p>
          </div>
        </article>
        <article class="forecast-item">
          <p>Kello</p>
          <p>Ikoni</p>
          <h4>LT</h4>
          <div class="forecast-extra-info">
            <p>Tuuli</p>
            <p>Kosteus</p>
            <p>5 mm</p>
          </div>
        </article>
        <article class="forecast-item">
          <p>Kello</p>
          <p>Ikoni</p>
          <h4>LT</h4>
          <div class="forecast-extra-info">
            <p>Tuuli</p>
            <p>Kosteus</p>
            <p>5 mm</p>
          </div>
        </article>
      </div>

    </>
  )
  }
}


export default App;
