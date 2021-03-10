import { settings } from '../auth/Settings'
import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const WeatherContext = createContext()

// This component establishes what data can be used.
export const WeatherProvider = (props) => {
    const [fiveDayForecast, setFiveDayForecast] = useState([])

    const getWeather = park => {
        const location = getParkLatLon(park)
        return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat}&lon=${location.lon}&exclude=current,minutely,hourly,alerts&units=imperial&appid=${settings.weatherKey}`)
            .then(res => res.json())
            .then(parsedRes => {
                weatherCollection = parsedRes.daily
                const eightDayForecast = buildWeatherArray()
                fiveDayForecast = eightDayForecast.slice(0, 5)
            })
    }

    // This converts a number [0-6] into a day of the week.
    const getDayOfWeek = number => {
        let local = number
        if ((new Date()).getDay() === number) return "Today"
        if ((new Date()).getDay() + 1 === number) return "Tomorrow"
        if (local > 6) number -= 7
        const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        return weekDays[number]
    }

    // this converts the raw daily weather data into an array of the objects we want to use
    const buildWeatherArray = () => {
        return weatherCollection.map((day, i) => {
            return {
                name: getDayOfWeek((new Date()).getDay() + i),
                temp: day.feels_like.day,
                mainWeather: day.weather[0].main
            }
        })
    }
    return (
        <WeatherContext.Provider value={{
            fiveDayForecast, getWeather
        }}>
            {props.children}
        </WeatherContext.Provider>
    )
}