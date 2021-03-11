import { settings } from '../auth/Settings'
import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const WeatherContext = createContext()

// This component establishes what data can be used.
export const WeatherProvider = (props) => {
    const [forecast, setForecast] = useState([])

    const getWeather = (cityName, stateCode) => {
        return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName},${stateCode}us&units=imperial&appid=${settings.weatherKey}`)
            .then(res => res.json())
            .then(parsedRes => {
                console.log(parsedRes.list)
                setForecast(parsedRes.list)
            })
    }

    return (
        <WeatherContext.Provider value={{
            forecast, getWeather
        }}>
            {props.children}
        </WeatherContext.Provider>
    )
}