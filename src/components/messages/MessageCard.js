import React, { useContext, useEffect, useState } from "react"
import { MessageContext } from "./MessageProvider"
import { useHistory } from "react-router-dom"
import { UserContext } from "../users/UserProvider"

//HTML to display individual messages
export const MessageCard = ({ messageInstance }) => {
    const { getMessageById, deleteMessage, editMessage, getMessages } = useContext(MessageContext)
    const { users, getUsers } = useContext(UserContext)
    
    const [message, setMessage] = useState({})
    
    
    
    const history = useHistory()

    const newDate = new Date(messageInstance.date).toLocaleDateString('en-US', { timeZone: "UTC"})
    
    const messageDelete = () => {
        deleteMessage(messageInstance.id)
        .then(() => {
            history.push("/messages")
        })
    }
    
    useEffect(() => {
        getUsers()
        .then(getMessageById(messageInstance.id))
        .then((response) => {
          setMessage(response)
        })
        
        }, [])
        
        
    
    let user = users.find(user => user.id === parseInt(messageInstance.userId))
        
        
    return (
    <section className="message">
        <h6 className="messagetimeStamp">{ newDate }</h6>
        <div className="messageText">{ messageInstance.text }</div>
        { console.log("users", users)}
        { console.log("user", user)}
        <div>--{user ? user.name : "no user"}</div>
        <button onClick={messageDelete} className="button">Delete</button>
        <button onClick={() => history.push(`/message/edit/${messageInstance.id}`)}>Edit</button>
    </section>
    )

}


