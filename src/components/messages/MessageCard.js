import React, { useContext, useEffect, useState } from "react"
import { MessageContext } from "./MessageProvider"
import { useParams, useHistory } from "react-router-dom"

//HTML to display individual messages
export const MessageCard = ({ messageInstance }) => {
    const { getMessageById, deleteMessage } = useContext(MessageContext)
    
    const [message, setMessage] = useState({})
    
    const {messageId} = useParams()
    
    const history = useHistory()
    
    const messageDelete = () => {
        deleteMessage(messageInstance.id)
        .then(() => {
            history.push("/messages")
        })
    }

    useEffect(() => {
        console.log("useEffect", messageId)
        getMessageById(messageId)
        .then((response) => {
          setMessage(response)
        })
        }, [])

    return (
    <section className="message">
        <h5 className="messagetimeStamp">{ messageInstance.date }</h5>
        <div className="messageText">{ messageInstance.text }</div>
        <button onClick={messageDelete} className="button">Delete</button>
        <button className="button" id="edit__">Edit</button>
    </section>
    )
}


