
import React, { useContext, useState } from "react"
import { useHistory, useParams } from "react-router-dom";
import { MessageContext } from "./MessageProvider";



export const MessageEdit = (id) => {
    const { editMessage, getMessageById } = useContext(MessageContext)
    
    const {messageId} = useParams()
    
    let thisMessage = {}

    debugger
    getMessageById(messageId)
    .then(res => thisMessage = res)

    const [message, setMessage] = useState({
        date: thisMessage.date,
        postText: thisMessage.text,
        userId: sessionStorage.getItem("nutshell_user")
        
    });
    
    console.log("this message", message)
    const history = useHistory();

    
    const handleControlledInputChange = (event) => {
      
      const editMessage = { ...message }
      let selectedVal = event.target.value
    
      
      /* Message is an object with properties.
      Set the property to the new value
      using object bracket notation. */
      editMessage[event.target.id] = selectedVal
      // update state
      setMessage(editMessage)
    }

    const handleSaveMessage = () => {
        
        //disable the button - no extra clicks
          //POST - add
        editMessage({
            id: thisMessage.id,
            date: thisMessage.date,
            text: message.postText,
            userId: sessionStorage.getItem("nutshell_user")
        })
            .then(() => history.push("/messages"))
        
    }
      
    
    console.log("thisMessage.text", thisMessage)
    return (
      <form className="messageForm">
        <h2 className="messageForm__title">Edit Post</h2>
        <fieldset>
          <div className="form-group">
            <textarea id="postText"  autoFocus className="form-control"
            onChange={handleControlledInputChange}
            value={message.text}
            >{thisMessage.postText}</textarea>
            
          </div>
        </fieldset>
        
        <button className="btn btn-primary"
          
          onClick={event => {
            event.preventDefault()
            handleSaveMessage()
          }}>
        Save Edit</button>
      </form>
    )
}
