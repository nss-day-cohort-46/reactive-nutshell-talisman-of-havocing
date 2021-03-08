import React, { useContext, useEffect, useState } from "react"
import "./Event.css"
import { useHistory, useParams } from 'react-router-dom';
import { EventContext } from "./EventProvider";

export const EmployeeForm = () => {
    const { events, getEvents, updateEvent, addEvent, getEventById } = useContext(EventContext)
    const currentUserId = 0

    const [event, setEvent] = useState({
        userId: currentUserId,
        name: "",
        date: "",
        location: "",
    });

    const [isLoading, setIsLoading] = useState(true)
    const { eventId } = useParams()
    const history = useHistory()


    const handleControlledInputChange = (event) => {
        const newEvent = { ...event }
        let selectedVal = event.target.value
        newEvent[event.target.id] = selectedVal
        setEvent(newEvent)
    }

    const handleClickSaveEmployee = (event) => {
        event.preventDefault()

        if (eventId === 0) {
            window.alert("Please select a location")
        } else {
            setIsLoading(true)
            if (eventId) {
                updateEvent({
                    id: event.id,
                    userId: event.userId,
                    name: event.name,
                    date: event.date,
                    location: event.location,
                })
                    .then(() => history.push(`/events/detail/${event.id}`))
            } else {
                addEvent(event)
                    .then(() => history.push("/events"))
            }
        }
    }

    const handleCancel = (event) => {
        event.preventDefault()
        history.goBack()
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
        <form className="eventForm">
            <h2 className="eventForm__title">{eventId ? "Edit Event" : "Add Event"}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Event name:</label>
                    <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="event name" value={event.name} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="role">Event Date:</label>
                    <input type="text" id="role" onChange={handleControlledInputChange} required className="form-control" placeholder="event position" value={event.role} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign to location: </label>
                    <select value={event.locationId} name="locationId" id="locationId" onChange={handleControlledInputChange} className="form-control" >
                        <option value="0">Select a location</option>
                        {locations.map(l => (
                            <option key={l.id} value={l.id}>{l.name}</option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <button disabled={isLoading} className="btn btn-primary" onClick={handleClickSaveEmployee}>{eventId ? "Submit Edit" : "Save New Employee"}</button>
            <button className="btn" onClick={handleCancel}>Cancel</button>
        </form>
    )
}