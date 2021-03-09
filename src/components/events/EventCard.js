
export const EventCard = ({ eventObj }) => {
    const eventDate = new Date(eventObj.date).toLocaleDateString('en-US', { timeZone: "CST" })
    const eventTime = new Date(eventObj.date).toLocaleTimeString('en-US', { timeZone: "CST", hour: '2-digit', minute:'2-digit' })
    return (
        <>
            <section>
                <h4>{eventObj.name}</h4>
                <p>When: {eventDate} - {eventTime} @ {eventObj.location}</p>
            </section>
        </>
    )
}