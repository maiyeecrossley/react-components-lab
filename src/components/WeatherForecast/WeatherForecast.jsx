import "./WeatherForecast.css";
import WeatherIcon from "../WeatherIcon/WeatherIcon";
import WeatherData from "../WeatherData/WeatherData";

const WeatherForecast = (props) => {
  const { day, img, imgAlt, conditions, time } = props
  return (
    <section className="weather">
      <WeatherData
        day={day} conditions={conditions} time={time} />
      <WeatherIcon
        img={img} imgAlt={imgAlt} />
    </section>

  )
}

export default WeatherForecast