const WeatherCard = ({weatherData}) => {
    const currentDate = new Intl.DateTimeFormat('en-GB', {month: 'long', day: 'numeric'}).format(weatherData.dt * 1000)
    const currentTime = new Intl.DateTimeFormat('en-GB', {hour: 'numeric', minute: 'numeric'}).format(weatherData.dt * 1000)
    //console.log(weatherData)
    //console.log(weatherData.rain['3h'])
    return (
      <div>
        <div className='container'>
          <article className="grid-item grid-col-span-2">
            <h2>{weatherData.name}</h2>
            <p className="desc">{weatherData.weather[0].description} </p>
          </article>
          <article className="grid-item">
            <img className="current-icon" src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}alt="weather status icon" />
            <p className="temp">{Math.round(weatherData.main.temp)} °C</p>
          </article>
          <article className="grid-item  grid-col-span-2">
            <h3>{currentDate}</h3>
            <p className="text">{currentTime}</p>
          </article>
          <article className="grid-item">
            <p className="text">Wind: {weatherData.wind.speed} m/s</p>
            <p className="text">Humidity: {weatherData.main.humidity} %</p>
            {JSON.stringify(weatherData.rain) ? <p className="text">Precipitation (3h): {weatherData.rain["3h"]} mm</p> : <p className="text">Precipitation (3h): 0 mm</p>}
          </article>
        </div>
      </div> 
     );

}

export default WeatherCard;