import { useState } from 'react'
import './Event.css'
import { EventForm } from './EventForm'

export const EventCard = ({ eventObj, eventCounter }) => {
    const theDate = new Date(eventObj.date)
    const eventDate = theDate.toLocaleDateString('en-US', { timeZone: "CST" })
    const eventTime = theDate.toLocaleTimeString('en-US', { timeZone: "CST", hour: '2-digit', minute:'2-digit' })
    const dayOfTheWeek = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const eventDay = dayOfTheWeek[theDate.getDay()]
    const [openForm, setOpenForm] = useState(false)
    let inputStyle = {}
    if (eventCounter === 1) {
        
    }


    const loggedInUserId = parseInt(sessionStorage.getItem("nutshell_user"))
    let editButton = false
    if (loggedInUserId === eventObj.userId) {
        editButton = true
    }

    const handleClickAddEvent = () => {
        setOpenForm(true)
    }

    return (
        <>
            <section>
                <h4 style={inputStyle} className="eventCardH4">{eventObj.name}</h4>
                <p className="eventCardP">{eventDay} - {eventDate}</p>
                <p className="eventCardP">{eventTime} @ {eventObj.location}</p>
                {editButton ? <button className="editEventButton" onClick={handleClickAddEvent}>edit</button> : ""}
                {openForm && <EventForm  setOpenForm={setOpenForm} eventId={eventObj.id}/>}
            </section>
        </>
    )
}