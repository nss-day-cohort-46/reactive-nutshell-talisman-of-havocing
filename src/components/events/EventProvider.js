import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const EventContext = createContext()

// This component establishes what data can be used.
export const EventProvider = (props) => {
    const [events, setEvents] = useState([])

    const getEvents = () => {
        return fetch("http://localhost:8088/events")
            .then(res => res.json())
            .then(setEvents)
    }

    const addEvent = eventObj => {
        return fetch("http://localhost:8088/events", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(eventObj)
        })
            .then(getEvents)
    }

    const getEventsById = (id) => {
        return fetch(`http://localhost:8088/events/${id}`)
            .then(res => res.json())
    }

    const updateEvent = event => {
        return fetch(`http://localhost:8088/events/${event.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(event)
        })
            .then(getEvents)
    }


    return (
        <EventContext.Provider value={{
            events, getEvents, addEvent, getEventsById, updateEvent
        }}>
            {props.children}
        </EventContext.Provider>
    )
}