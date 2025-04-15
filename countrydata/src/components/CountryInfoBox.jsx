import { useEffect } from "react"
import WeatherInfoBox from "./WeatherInfoBox"
import { formatNumber } from "../utils/formatters"

const CountryInfoBox = ({ country }) => {
    const { name, capital, population, area, languages, flags } = country
    const languageList = Object.values(languages).map((lang) => (
        <li key={lang}>{lang}</li>
    ))

    return (
        <div>
            <h2>{name.common}</h2>
            <p>Capital: {capital}</p>
            <p>Population: {formatNumber(population)}</p>
            <p>Area: {formatNumber(area)} km²</p>
            <h3>Languages:</h3>
            <ul>{languageList}</ul>
            <img src={flags.png} alt={`Flag of ${name.common}`} />

            <WeatherInfoBox country={country} />
        </div>
    )
}

export default CountryInfoBox
