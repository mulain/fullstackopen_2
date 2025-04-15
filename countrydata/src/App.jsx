import { useEffect, useState } from "react"
import CountryInfoBox from "./components/CountryInfoBox"
import axios from "axios"

function App() {
    const [countryNameFilter, setCountryNameFilter] = useState("")
    const [countryData, setCountryData] = useState([])

    const api = axios.create({
        baseURL: "https://studies.cs.helsinki.fi/restcountries/api/",
    })

    const getAllCountryData = () => {
        const request = api.get("all")
        request
            .then((response) => {
                setCountryData(response.data)
            })
            .catch((error) => {
                console.error("Error fetching country data:", error)
            })
    }

    useEffect(() => {
        getAllCountryData()
    }, [])

    const filteredCountries = countryData.filter((country) =>
        country.name.common.toLowerCase().includes(countryNameFilter.toLowerCase())
    )

    const renderCountryList = () => {
        const count = filteredCountries.length

        if (count === 0) return <p>No matches</p>
        if (count === 1) return <CountryInfoBox country={filteredCountries[0]} />
        if (count <= 10)
            return (
                <ul>
                    {filteredCountries.map((country) => (
                        <li key={country.name.common}>
                            {country.name.common}
                            <button
                                onClick={() => {
                                    setCountryNameFilter(country.name.common)
                                }}
                            >
                                Show
                            </button>
                        </li>
                    ))}
                </ul>
            )
        return <p>Too many matches</p>
    }

    return (
        <>
            <h1>Country Data</h1>
            <input
                id="countryInput"
                type="text"
                placeholder="Enter name of country"
                value={countryNameFilter}
                onChange={(event) => setCountryNameFilter(event.target.value)}
            />
            {renderCountryList()}
        </>
    )
}

export default App
