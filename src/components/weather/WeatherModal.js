import React, { useContext, useEffect, useState } from "react"
import "./Weather.css"
import { WeatherContext } from "./WeatherProvider"

export const WeatherModal = ({ setOpenWeather, eventObj }) => {
    const { getWeather, forecast } = useContext(WeatherContext)
    const theDate = new Date(eventObj.date)
    const eventDate = theDate.toLocaleDateString('en-US', { timeZone: "CST" })
    const [eventForecast, seteventForecast] = useState({
        maxTemp: 0,
        mainWeather: ""
    })

    const handleCancel = (event) => {
        event.preventDefault()
        setOpenWeather(false)
    }

    useEffect(() => {
        getWeather(eventObj.city, eventObj.state)
    }, [])

    useEffect(() => {
        if (forecast.list) {
            let updatedForecast = {
                maxTemp: forecast.list[0].main.temp_max,
                mainWeather: forecast.list[0].weather[0].description
            }
            seteventForecast(updatedForecast)
        }
    }, [forecast])

    return (
        <div id="weather__modal" className="modal--parent">
            <div className="modal--content weatherContent">
                <h3>{eventObj.name}</h3>
                <h5>{eventDate} - {eventObj.city}, {eventObj.state}</h5>
                <h6>predicted forecast</h6>
                <div className="predictedForecast">
                    <h3>High</h3>
                    <h4>{eventForecast.maxTemp.toFixed(0)}˚F</h4>
                    <h5>{eventForecast.mainWeather}</h5>
                </div>
                <button className="btn weatherButton" onClick={handleCancel}>close</button>
            </div>
        </div>
    )
}