import { EventContext } from "./EventProvider"
import { EventCard } from "./EventCard"
import { useContext, useEffect } from "react"
import './Event.css'
import { useHistory } from "react-router-dom"

export const EventList = () => {
    const { events, getEvents } = useContext(EventContext)
    const history = useHistory()

    const sortedEvents = events.slice().sort((a, b) => {
        const aDate = new Date(a.date)
        const bDate = new Date(b.date)
        a.date = aDate
        b.date = bDate
        return a.date - b.date
    })

    useEffect(() => {
        getEvents()
    }, [])

    const handleClickAddEvent = () => {
        history.push("/events/create")
    }

    return (
        <section className="events">
            <div className="eventListHeader">
                <h3 className="eventListH3">Upcoming Events</h3>
                <button className="btn btn-primary newEventButton" onClick={handleClickAddEvent}>+ Event</button>
            </div>
            {sortedEvents.map(eventObj => {
                return <EventCard key={eventObj.id} eventObj={eventObj} />
            })}
        </section>
    )
}