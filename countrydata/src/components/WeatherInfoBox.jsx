import React, { useEffect, useState } from "react"
import axios from "axios"
import { kelvinToCelsius } from "../utils/formatters"

const WeatherInfoBox = ({ country }) => {
    const [weatherData, setWeatherData] = useState(null)
    const { capital } = country
    const api = axios.create({
        baseURL: "https://api.openweathermap.org/data/2.5/weather",
    })
    const apiKey = import.meta.env.VITE_OPENWEATHERMAP_API_KEY

    const getWeatherData = (city) => {
        const request = api.get(`?q=${city}&appid=${apiKey}`)
        request
            .then((response) => {
                setWeatherData(response.data)
            })
            .catch((error) => {
                console.error("Error fetching weather data:", error)
            })
    }

    useEffect(() => {
        if (capital) {
            getWeatherData(capital)
        }
    }, [capital])

    if (!capital || !weatherData) {
        return <p>No weather data available</p>
    }

    console.log("Weather data:", weatherData)
    const weatherIconCode = weatherData.weather[0].icon
    console.log("Weather icon code:", weatherIconCode)

    return (
        <div>
            <h2>Weather in {weatherData.name}</h2>
            <p>Temperature: {kelvinToCelsius(weatherData.main.temp)} °C</p>
            <p>Wind: {weatherData.wind.speed} m/s</p>
            <p>Humidity: {weatherData.main.humidity} %</p>
            <p>Condition: {weatherData.weather[0].description}</p>
            <img
                src={`https://openweathermap.org/img/wn/${weatherIconCode}@2x.png`}
                alt={`Weather icon: ${weatherData.weather[0].description}`}
            />
        </div>
    )
}

export default WeatherInfoBox
