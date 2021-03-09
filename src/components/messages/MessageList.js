import React, { useContext, useEffect } from "react"
import { MessageCard } from "../messages/MessageCard"
import { MessageContext } from "../messages/MessageProvider.js"
import { MessagePost } from "./MessagePost"


export const MessageList = () => {
  // This state changes when `getMessages()` is invoked below
  const { messages, getMessages } = useContext(MessageContext)
  
  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("MessageList: useEffect - getMessages")
    getMessages()

  }, [])
  

  return (
      <>
      <div id="newpost"><MessagePost /></div>
      <div className="messages">
      {console.log("MessageList: Render", messages)}
      {
        messages.map(messageObject => {
          return <MessageCard key={messageObject.id} messageInstance={messageObject} />
        })
      }
    
    </div>
    </>
  )
}
