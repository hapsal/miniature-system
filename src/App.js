import './App.css'
import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import WeatherCard from './components/WeatherCard';
import axios from 'axios';

const App = () => {
  const [location, setLocation] = useState('')
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentWeatherdata, setcurrentWeatherdata] = useState([]);
  const [forecastData, setforecastData] = useState([]);

  const apiKey = ''

  let currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?id=${location}&appid=${apiKey}&units=metric`
  let forecastWeatherUrl = `https://api.openweathermap.org/data/2.5/forecast?id=${location}&appid=${apiKey}&units=metric`

  useEffect(() => {
    const fetchApis = async () => {
      Promise.all([await axios.get(currentWeatherUrl), await axios.get(forecastWeatherUrl)])
        .then(responses => {
          setcurrentWeatherdata(responses[0].data)
          setforecastData(responses[1].data)
          setError(null)
        })
        .catch(error => {
          console.error(error)
        })
        setLoading(false)
    }
    fetchApis();
  }, [currentWeatherUrl, forecastWeatherUrl])
  
    const handleClick = (id) => {
      if (id === 'allCities') {
        console.log('helo')
      }
      setLocation(id)
    }

    return(
      <>
        <header>
          <h1>Säätutka</h1>
        </header>

        {loading && <div className='container'>Loading data...</div>}
        {error && (<div className='container'>`There is a problem fetching the data ${error}`</div>)}

        <Navigation handleClick={handleClick} />

        {(typeof currentWeatherdata.main != 'undefined' ? (<WeatherCard weatherData={currentWeatherdata} forecastData={forecastData}/>) : (<div></div>))}
      </>
    )

}

export default App;