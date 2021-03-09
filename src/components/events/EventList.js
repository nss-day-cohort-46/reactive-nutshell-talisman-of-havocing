import { EventContext } from "./EventProvider"
import { EventCard } from "./EventCard"
import { useContext, useEffect } from "react"

export const EventList = () => {
    const { events, getEvents } = useContext(EventContext)

    useEffect(() => {
        getEvents()
    }, [])

    return (
        <section className="events">
            <h3>Upcoming Events</h3>
            {events.map(eventObj => {
                return <EventCard key={eventObj.id} eventObj={eventObj} />
            })}
        </section>
    )
}