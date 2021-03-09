import React, { useContext, useEffect, useState } from "react"
import "./Event.css"
import { useHistory, useParams } from 'react-router-dom';
import { EventContext } from "./EventProvider";

export const EventForm = ({ setOpenForm }) => {
    const { updateEvent, addEvent, getEventById } = useContext(EventContext)
    const currentUserId = parseInt(sessionStorage.getItem("nutshell_user"))

    const [anEvent, setEvent] = useState({
        userId: currentUserId,
        name: "",
        date: "",
        location: "",
    });

    const [isLoading, setIsLoading] = useState(true)
    const { eventId } = useParams()
    const history = useHistory()

    const handleControlledInputChange = (event) => {
        const newEvent = { ...anEvent }
        newEvent[event.target.id] = event.target.value
        setEvent(newEvent)
    }

    const handleClicksSaveEvent = (event) => {
        event.preventDefault()

        setIsLoading(true)
        if (eventId) {
            updateEvent({
                id: anEvent.id,
                userId: anEvent.userId,
                name: anEvent.name,
                date: anEvent.date,
                location: anEvent.location,
            })
                .then(() => setOpenForm(false))
        } else {
            addEvent(anEvent)
                .then(() => setOpenForm(false))
        }
    }

    const handleCancel = (event) => {
        event.preventDefault()
        setOpenForm(false)
    }

    useEffect(() => {
        if (eventId) {
            getEventById(eventId)
                .then(event => {
                    setEvent(event)
                    setIsLoading(false)
                })
        } else {
            setIsLoading(false)
        }
    }, [])

    return (
        <div id="eventForm__modal" className="modal--parent">
            <div className="modal--content">
                <form className="eventForm">
                    <h2 className="eventForm__title">{eventId ? "Edit Event" : "Add Event"}</h2>
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="name">Event name:</label>
                            <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="event name" value={anEvent.name} />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="role">Event Date:</label>
                            <input type="datetime-local" id="date" onChange={handleControlledInputChange} required className="form-control" value={anEvent.date} />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="name">Event Location:</label>
                            <input type="text" id="location" onChange={handleControlledInputChange} required className="form-control" placeholder="event location" value={anEvent.location} />
                        </div>
                    </fieldset>
                    <button disabled={isLoading} className="btn btn-primary" onClick={handleClicksSaveEvent}>{eventId ? "Submit Edit" : "Save New Event"}</button>
                    <button className="btn" onClick={handleCancel}>Cancel</button>
                </form>
            </div>
        </div>
    )
}