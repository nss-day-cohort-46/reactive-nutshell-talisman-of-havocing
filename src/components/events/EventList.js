import { EventContext } from "./EventProvider"
import { EventCard } from "./EventCard"
import { useContext, useEffect } from "react"
import './Event.css'

export const EventList = () => {
    const { events, getEvents } = useContext(EventContext)

    const sortedEvents = events.slice().sort((a,b) => {
        const aDate = new Date(a.date)
        const bDate = new Date(b.date)
        a.date = aDate
        b.date = bDate
        return a.date - b.date
    })

    useEffect(() => {
        getEvents()
    }, [])

    return (
        <section className="events">
            <h3 className="eventListH3">Upcoming Events</h3>
            {sortedEvents.map(eventObj => {
                return <EventCard key={eventObj.id} eventObj={eventObj} />
            })}
        </section>
    )
}