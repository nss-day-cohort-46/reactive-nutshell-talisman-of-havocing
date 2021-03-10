import { useState } from 'react'
import './Event.css'
import { EventForm } from './EventForm'

export const EventCard = ({ eventObj, eventCounter }) => {
    const theDate = new Date(eventObj.date)
    const eventDate = theDate.toLocaleDateString('en-US', { timeZone: "CST" })
    const eventTime = theDate.toLocaleTimeString('en-US', { timeZone: "CST", hour: '2-digit', minute: '2-digit' })
    const dayOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const eventDay = dayOfTheWeek[theDate.getDay()]
    const [openForm, setOpenForm] = useState(false)
    const loggedInUserId = parseInt(sessionStorage.getItem("nutshell_user"))
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
        setOpenForm(true)
    }

    return (
        <>
            <section style={sectionInputStyle}>
                <h4 style={headerInputStyle} className="eventCardH4">{eventObj.name}</h4>
                <p style={paragraphInputStyle} className="eventCardP">{eventDay} - {eventDate}</p>
                <p style={paragraphInputStyle} className="eventCardP">{eventTime} @ {eventObj.location}</p>
                <div>
                    {editButton ? <button style={buttonInputStyle} className="editEventButton" onClick={handleClickAddEvent}>edit</button> : ""}
                    {editButton ? <button style={buttonInputStyle} className="deleteEventButton" onClick={handleClickDeleteEvent}>delete</button> : ""}
                </div>
                {openForm && <EventForm setOpenForm={setOpenForm} eventId={eventObj.id} />}
            </section>
        </>
    )
}