import React from "react"
import { Link } from "react-router-dom"


//messageInstance.location.name? Because expand in the provider. Not recommended.

export const MessageCard = ({ messageInstance }) => (
    <section className="message">
        <h3 className="messagetimeStamp">{ messageInstance.timeStamp }</h3>
        <div className="messageText">{ messageInstance.text }</div>
    </section>
)


