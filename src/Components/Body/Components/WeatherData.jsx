import React, { useState } from 'react';
import axios from 'axios';

function WeatherData(props) {

    const [weatherData, setWeatherData] = useState(null);
    const [weatherIconUrl, setWeatherIconUrl] = useState(null);

    async function getWeatherData(city) {
        const API_KEY = "51863f2dc804ccf5e6c9585624c6667e"
        const URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
        const { data } = await axios.get(URL);
        setWeatherData(data);

        const iconCode = data.weather[0].icon;
        const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
        setWeatherIconUrl(iconUrl);
    }

    function handleInputChange(event) {
        const city = event.target.value;
        getWeatherData(city);
    }


    return (
        <div className="card " style={{ width: '18rem' }}>
            {weatherData && (
                <div>
                    <img src={weatherIconUrl} alt="weatherIcons" />
                    <h1 className="card-text">{Math.floor(weatherData.main.temp - 273.15)}°C</h1>
                </div>
            )}

            <input type="text" className='card-title' onChange={handleInputChange} placeholder="Enter the city name" />


            <ul className="list-group list-group-flush">
                <li className="list-group-item">XXX</li>
                <li className="list-group-item">XXX</li>
                <li className="list-group-item">XXX</li>
                <li className="list-group-item">XXX</li>
                <li className="list-group-item">XXX</li>
            </ul>

        </div>


    )
}

export default WeatherData;

