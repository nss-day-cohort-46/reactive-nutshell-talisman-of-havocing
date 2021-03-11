import { useContext, useEffect, useState } from 'react'
import { WeatherModal } from '../weather/WeatherModal'
import './Event.css'
import { EventForm } from './EventForm'
import { EventContext } from "./EventProvider"
import { WeatherContext } from "../weather/WeatherProvider"

export const EventCard = ({ eventObj, eventCounter }) => {
    const theDate = new Date(eventObj.date)
    const eventDate = theDate.toLocaleDateString('en-US', { timeZone: "CST" })
    const eventTime = theDate.toLocaleTimeString('en-US', { timeZone: "CST", hour: '2-digit', minute: '2-digit' })
    const dayOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const eventDay = dayOfTheWeek[theDate.getDay()]
    const [openForm, setOpenForm] = useState(false)
    const [openWeather, setOpenWeather] = useState(false)
    const [forecast, setForecast] = useState([])
    const loggedInUserId = parseInt(sessionStorage.getItem("nutshell_user"))
    const { deleteEvent } = useContext(EventContext)
    const { getWeather } = useContext(WeatherContext)
    const { events } = useContext(EventContext)

    let headerInputStyle = {}
    let paragraphInputStyle = {}
    let sectionInputStyle = {
        marginLeft: '20px',
        marginRight: '20px',
    }
    let buttonInputStyle = {}
    let editButton = false
    if (eventCounter === 1) {
        headerInputStyle = {
            fontWeight: 'bold',
            fontSize: 'xx-large',
            marginTop: '10px',
        }
        paragraphInputStyle = {
            fontWeight: 'bold',
            fontSize: 'large',
        }
        sectionInputStyle = {
            backgroundColor: 'rgb(129, 190, 129)',
            borderRadius: '20px',
            padding: '10px',
            marginTop: '10px',
            marginLeft: '20px',
            marginRight: '20px',
        }
        buttonInputStyle = {
            backgroundColor: 'rgb(129, 190, 129)',
        }
    }

    if (loggedInUserId === eventObj.userId) {
        editButton = true
    }

    const handleClickAddEvent = () => {
        setOpenForm(true)
    }
    const handleClickDeleteEvent = () => {
        deleteEvent(eventObj.id)
    }
    const handleClickOpenWeather = () => {
        setOpenWeather(true)
    }

    // useEffect(() => {
    //     getWeather(eventObj.city, eventObj.state).then(response => setForecast(response))
    // }, [])

    return (
        <>
            <section style={sectionInputStyle}>
                <div className="eventCardData">
                    <div>
                        <h4 style={headerInputStyle} className="eventCardH4">{eventObj.name}</h4>
                        <p style={paragraphInputStyle} className="eventCardP">{eventDay} - {eventDate}</p>
                        <p style={paragraphInputStyle} className="eventCardP">{eventTime} @ {eventObj.venue} in {eventObj.city}, {eventObj.state}</p>
                    </div>
                    <button className="openWeatherButton" onClick={handleClickOpenWeather}>Weather</button>
                </div>
                <div>
                    {editButton ? <button style={buttonInputStyle} className="editEventButton" onClick={handleClickAddEvent}>edit</button> : ""}
                    {editButton ? <button style={buttonInputStyle} className="deleteEventButton" onClick={handleClickDeleteEvent}>delete</button> : ""}
                </div>
                {openForm && <EventForm setOpenForm={setOpenForm} eventId={eventObj.id} />}
                {openWeather && <WeatherModal setOpenWeather={setOpenWeather} eventObj={eventObj} forecast={forecast} />}
            </section>
        </>
    )
}