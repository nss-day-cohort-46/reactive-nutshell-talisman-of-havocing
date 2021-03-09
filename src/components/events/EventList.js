import { EventContext } from "./EventProvider"
import { EventCard } from "./EventCard"
import { useContext, useEffect } from "react"
import './Event.css'

export const EventList = () => {
    const { events, getEvents } = useContext(EventContext)

    useEffect(() => {
        getEvents()
    }, [])

    return (
        <section className="events">
            <h3 className="eventListH3">Upcoming Events</h3>
            {events.map(eventObj => {
                return <EventCard key={eventObj.id} eventObj={eventObj} />
            })}
        </section>
    )
}