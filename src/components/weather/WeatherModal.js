import React, { useContext, useEffect, useState } from "react"
import "./Weather.css"
import { WeatherContext } from "./WeatherProvider"

export const WeatherModal = ({ setOpenWeather, eventObj }) => {
    const { getWeather, forecast } = useContext(WeatherContext)
    const theDate = new Date(eventObj.date)
    const eventDate = theDate.toLocaleDateString('en-US', { timeZone: "CST" })
    const [eventForecast, seteventForecast] = useState()

    const handleCancel = (event) => {
        event.preventDefault()
        setOpenWeather(false)
    }

    useEffect(() => {
        getWeather(eventObj.city, eventObj.state)
    }, [])

    if (forecast.list) {
        debugger
        console.log(eventObj.date.toUTCString())
        const dayOfEventForecast = forecast.list.filter(object => object.dt_txt.startsWith(eventObj.date.toLocaleTimeString('en-US', { timeZone: "CST", hour: '2-digit', minute: '2-digit' }).substring(0,10)))
        console.log(dayOfEventForecast)
        const timeOfEventForecast = dayOfEventForecast.find(object => object.dt_txt.substring(12,13) === eventObj.date.substring(12,13))
        console.log(timeOfEventForecast)
    }

    return (
        <div id="weather__modal" className="modal--parent">
            <div className="modal--content">
                <h3>{eventObj.name}</h3>
                <h5>{eventDate} - {eventObj.city}, {eventObj.state}</h5>
                <h6>predicted forecast</h6>
                <button className="btn weatherButton" onClick={handleCancel}>close</button>
            </div>
        </div>
    )
}