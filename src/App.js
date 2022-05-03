import './App.css'
import { useState, useEffect, useCallback } from 'react';
import Navigation from './components/Navigation';
import WeatherCard from './components/WeatherCard';
import axios from 'axios';
import AllWeatherCards from './components/AllWeatherCards';
import Forecast from './components/Forecast';

const App = () => {
  const [location, setLocation] = useState('634963')
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentWeatherdata, setcurrentWeatherdata] = useState([]);
  const [forecastData, setforecastData] = useState([]);
  const [allWeathers, setAllWeathers] = useState([]);
  const [allForecasts, setAllForecasts] = useState([])
  const [all, setAll] = useState(false)

  let currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?id=${location}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
  let forecastWeatherUrl = `https://api.openweathermap.org/data/2.5/forecast?id=${location}&appid=${process.env.REACT_APP_API_KEY}&units=metric`

  const fetchUrl = async (url) => {
    const cityApi = await axios(url)
    return cityApi.data
  }                

 const fetchCurrentAll = useCallback((id) => {
   const requests = id.map(async (i) => {
     const url = `https://api.openweathermap.org/data/2.5/weather?id=${i}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
     const a = await fetchUrl(url);
     return a;
   })
   return Promise.all(requests)
 }, [])
 
 const fetchForecastAll = useCallback((id) => {
  const requests = id.map(async (i) => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?id=${i}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
    const a = await fetchUrl(url);
    return a;
  })
  return Promise.all(requests)
}, []) 

  useEffect(() => {
    const handleAllFetch = () => {
      fetchCurrentAll(['650225', '634963', '655195','660129']).then(answer => setAllWeathers(answer))
      fetchForecastAll(['650225', '634963', '655195','660129']).then(answer => setAllForecasts(answer))
    }

    Promise.all([axios.get(currentWeatherUrl), axios.get(forecastWeatherUrl)])
    .then(responses => {
      setcurrentWeatherdata(responses[0].data)
      setforecastData(responses[1].data)
      setError(null)
    })
    .catch(error => {
      setError(error)
      console.error(error)
    })
    handleAllFetch()
    setLoading(false)
  }, [currentWeatherUrl, forecastWeatherUrl, fetchCurrentAll, fetchForecastAll])

    const handleChange = (e) => {
      if (e.target.value === 'allCities') {
        setcurrentWeatherdata([])
        setforecastData([])
        setAll(true)
      } else {
        setLocation(e.target.value)
        setAllWeathers([])
        setAllForecasts([])
        setAll(false)
      }
    }

    return(
      <>
        <header>
          <h1>Säätutka</h1>
        </header>

        <Navigation handleChange={handleChange} />
        
        {all ? <AllWeatherCards allData={allWeathers} allForecasts={allForecasts} /> : <div></div>}

        {(typeof currentWeatherdata.main != 'undefined' ? (<><WeatherCard weatherData={currentWeatherdata} />
        <Forecast forecastData={forecastData}/></>) : 
        (<div></div>))}

        {loading && <div className='container'>Loading data...</div>}
        {error && (<div className='container'>`There is a problem fetching the data ${error}`</div>)}
      </>
    )

}

export default App;