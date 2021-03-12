import { EventContext } from "./EventProvider"
import { EventCard } from "./EventCard"
import { useContext, useEffect, useState } from "react"
import './Event.css'
import { EventForm } from "./EventForm"

export const EventList = () => {
    const { events, getEvents } = useContext(EventContext)
    const [sortedEvents, setSortedEvents] = useState([])
    const [openForm, setOpenForm] = useState(false)
    let eventCounter = 0

    useEffect(() => {
        getEvents()
    }, [])

    useEffect(() => {
        const theSortedEvents = events.slice().sort((a, b) => {
            const aDate = new Date(a.date)
            const bDate = new Date(b.date)
            a.date = aDate
            b.date = bDate
            return a.date - b.date
        })
        setSortedEvents(theSortedEvents)
    }, [events])

    const handleClickAddEvent = () => {
        setOpenForm(true)
    }

    return (
        <section className="events eventsContainer">
            <div className="eventListHeader">
                <h3 className="eventListH3">Upcoming Events</h3>
                <button className="btn btn-primary newEventButton" onClick={handleClickAddEvent}>+ Event</button>
            </div>
            {sortedEvents.map(eventObj => {
                eventCounter++
                return <EventCard key={eventObj.id} eventObj={eventObj} eventCounter={eventCounter} />
            })}
            {openForm && <EventForm  setOpenForm={setOpenForm}/>}
        </section>
    )
}