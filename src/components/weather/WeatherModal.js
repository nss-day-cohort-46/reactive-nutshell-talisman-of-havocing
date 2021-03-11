import React, { useContext, useEffect, useState } from "react"
import "./Weather.css"

export const WeatherModal = ({ setOpenWeather, eventObj }) => {

    const handleCancel = (event) => {
        event.preventDefault()
        setOpenWeather(false)
    }

    return (
        <div id="eventForm__modal" className="modal--parent">
            <div className="modal--content">
                <h3>{eventObj.name}</h3>
                <h6>predicted forecast</h6>
                <button className={`btn ` + `weatherButton`} onClick={handleCancel}>close</button>
            </div>
        </div>
    )
}