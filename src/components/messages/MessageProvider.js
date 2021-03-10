import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data. Makes a variable global.
export const MessageContext = createContext()

// This component establishes what data can be used.
export const MessageProvider = (props) => {
    const [messages, setMessages] = useState([])

    //standard getMessages function
    const getMessages = () => {
        return fetch("http://localhost:8088/messages")
        .then(res => res.json())
        .then(setMessages)
    }

    //POST function
    const newMessage = messageObj => {
        return fetch("http://localhost:8088/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(messageObj)
        })
        .then(getMessages)
    }

    //function to get message by ID
    const getMessageById = (id) => {
        return fetch(`http://localhost:8088/messages/${id}?_expand=location&_expand=customer`)
            .then(res => res.json())
    }

    //function to delete a message
    const deleteMessage = messageId => {
        return fetch(`http://localhost:8088/messages/${messageId}?_expand=location`, {
            method: "DELETE"
        })
            .then(getMessages)
    }

    //function to edit message
    const editMessage = message => {
        return fetch(`http://localhost:8088/messages/${message.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(message)
        })
          .then(getMessages)
      }

    

    //return the functions you want available
    return (
        <MessageContext.Provider value={{
            messages, getMessages, newMessage, getMessageById, deleteMessage, editMessage
        }}>
            {props.children}
        </MessageContext.Provider>
    )

}