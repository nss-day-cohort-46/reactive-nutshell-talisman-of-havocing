
export const EventCard = ({ eventObj }) => {
    const eventDate = new Date(eventObj.date).toLocaleDateString('en-US', { timeZone: "CST" })
    const eventTime = new Date(eventObj.date).toLocaleTimeString('en-US', { timeZone: "CST" })
    return (
        <>
            <section>
                <h3>{eventObj.name}</h3>
                <p>When: {eventDate}</p>
                <p>When: {eventTime}</p>
                <p>Where: {eventObj.location}</p>
            </section>
        </>
    )
}