import Forecast from "./Forecast";
import WeatherCard from "./WeatherCard";

const AllWeatherCards = ({allData, allForecasts}) => {
  /** Ei paras ratkaisu, mutta toimii tähän hätään **/
    return (
      <div>
        <WeatherCard weatherData={allData[0]}/>
        <Forecast forecastData={allForecasts[0]}/>

        <WeatherCard weatherData={allData[1]}/>
        <Forecast forecastData={allForecasts[1]}/>

        <WeatherCard weatherData={allData[2]}/>
        <Forecast forecastData={allForecasts[2]}/>

        <WeatherCard weatherData={allData[3]}/>
        <Forecast forecastData={allForecasts[3]}/>
        
      </div>
     );

}
 
export default AllWeatherCards;