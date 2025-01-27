import "./WeatherForecast.css";
import WeatherIcon from "../WeatherIcon/WeatherIcon";
import WeatherData from "../WeatherData/WeatherData";

const WeatherForecast = (props) => {
  const { day, img, imgAlt, conditions, time } = props
  return (
    <>
    <WeatherData
    day={day} conditions={conditions} time={time}/>
    <WeatherIcon 
    img={img} imgAlt={imgAlt}/>
  </>
  )
}

export default WeatherForecast