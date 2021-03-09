
import React, { useContext, useState } from "react"
import { useHistory, useParams } from "react-router-dom";
import { MessageContext } from "./MessageProvider";



export const MessageEdit = (id) => {
    const { editMessage, getMessageById } = useContext(MessageContext)

    const thisMessage = getMessageById(id)
    const [message, setMessage] = useState({
        date: new Date,
        postText: "",
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
        debugger
          //POST - add
        editMessage({
            id: message.id,
            date: new Date,
            text: message.postText,
            userId: sessionStorage.getItem("nutshell_user")
        })
            .then(() => history.push("/messages"))
    }
      
    

    return (
      <form className="messageForm">
        <h2 className="messageForm__title">New Post</h2>
        <fieldset>
          <div className="form-group">
            <input type="text" id="postText" required autoFocus className="form-control"
            placeholder="New Post..."
            onChange={handleControlledInputChange}
            value={message.text}/>
          </div>
        </fieldset>
        
        <button className="btn btn-primary"
          
          onClick={event => {
            event.preventDefault()
            handleSaveMessage()
          }}>
        Save</button>
      </form>
    )
}
