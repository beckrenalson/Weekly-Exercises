import { useState, useEffect } from 'react'
import WeatherDetails from "./WeatherDetails"
import Location from './Location';

function WeatherPage() {

    const [weather, setWeather] = useState();
    const [latInput, setLatInput] = useState('');
    const [longInput, setLongInput] = useState('');

    const weatherData = async () => {
        const weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latInput}&longitude=${longInput}&current=temperature_2m`);
        const weatherData = await weatherResponse.json();
        setWeather(weatherData);
    }

    const submit = () => {
        weatherData();
    }

    return (
        <>

        <h3>Input Longtitude and Latitude for the country you want to check</h3>
            <input name="lat" type="text" placeholder="Enter latitude" value={latInput} onChange={(e) => setLatInput(e.target.value)} />
            <input name="long" type="text" placeholder="Enter longitude" value={longInput} onChange={(e) => setLongInput(e.target.value)} />

            <button onClick={submit} className="submitBtn">Submit</button>
            {weather && <Location
                latitude={weather.latitude}
                longitude={weather.longitude}
            />}
            {weather && <WeatherDetails
                weather={weather}
            />}
        </>
    )
}
export default WeatherPage