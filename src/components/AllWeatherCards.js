import Forecast from "./Forecast";
import WeatherCard from "./WeatherCard";

const AllWeatherCards = ({allData, allForecasts}) => {
  const combinedArrays = allData.map(r => ({...r, ...allForecasts.find(i => i.city.id === r.id)}))
  
    return (
      <div>
{/*          {allData.map((item) => {
          return <WeatherCard weatherData={item}/>
        })} 

        {allForecasts.map((item) => {return <Forecast forecastData={item}/>})}  */}

        {combinedArrays.map((item) => (
          <><WeatherCard weatherData={item}/> {console.log(item)}</>
        ))}
      </div>
     );

}
 
export default AllWeatherCards;