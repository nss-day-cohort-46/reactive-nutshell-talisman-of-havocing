import React from "react"


//HTML to display individual messages
export const MessageCard = ({ messageInstance }) => (
    <section className="message">
        <h5 className="messagetimeStamp">Date: { messageInstance.timeStamp }</h5>
        <div className="messageText">{ messageInstance.text }</div>
    </section>
)


