function WeatherDetails({ weather }) {
    return (
        <div>
            <h1>Weather</h1>
            <p>Temperature: {weather.current.temperature_2m}{weather.current_units.temperature_2m}</p>
            <p>Elevation: {weather.elevation}</p>
            <p>Time: {weather.current.time} {weather.timezone}</p>
        </div>
    )
}
export default WeatherDetails