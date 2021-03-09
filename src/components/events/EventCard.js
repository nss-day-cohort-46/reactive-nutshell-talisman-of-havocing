
const EventCard = ({ eventObj }) => {
    return (
        <>
            <section>
                <h3>{eventObj.name}</h3>
                <p>When: {eventObj.date}</p>
                <p>Where: {eventObj.location}</p>
            </section>
        </>
    )
}