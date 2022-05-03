const Forecast = ({forecastData}) => {
    const forecastSliced = forecastData.list.slice(0, 5)
    return ( 
      <div className="forecast-container">
        {forecastSliced.map((item, i) => (
        <article className="forecast-item" key={i}>
            <p>{new Intl.DateTimeFormat('en-GB', {hour: 'numeric', minute: 'numeric'}).format(item.dt * 1000)}</p>
            <img className="forecast-icon" src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`} alt="weather" />
            <h4>{Math.round(item.main.temp)} °C</h4>
            <div className="forecast-extra-info">
              <p>{item.wind.speed} m/s</p>
              <p>{item.main.humidity} %</p>
              {JSON.stringify(item.rain) ? <p>{item.rain["3h"]} mm</p> : <p>0 mm </p>}
            </div>
        </article>
        ))}
      </div>
     );
}
 
export default Forecast;