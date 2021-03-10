import React, { useContext, useState } from "react"
import { useHistory, useParams } from "react-router-dom";
import { MessageContext } from "./MessageProvider";



export const MessagePost = () => {
    const { newMessage } = useContext(MessageContext)


    const [message, setMessage] = useState({
      date: new Date,
      postText: "",
      userId: sessionStorage.getItem("nutshell_user")
      
    });

    const history = useHistory();


    const handleControlledInputChange = (event) => {
      
      const newMessage = { ...message }
      let selectedVal = event.target.value
    
      
      /* Message is an object with properties.
      Set the property to the new value
      using object bracket notation. */
      newMessage[event.target.id] = selectedVal
      // update state
      setMessage(newMessage)
    }

    const handleSaveMessage = () => {
        //disable the button - no extra clicks
        
          //POST - add
        newMessage({
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