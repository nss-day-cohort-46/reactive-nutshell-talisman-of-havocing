
import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom";
import { MessageContext } from "./MessageProvider";




export const MessageEdit = (id) => {
    const { editMessage, getMessageById } = useContext(MessageContext)
    const {messageId} = useParams()
    const [isLoading, setIsLoading] = useState(true);
    const history = useHistory();
    
    let thisMessage = {}

    
    getMessageById(parseInt(messageId))
    .then(res => thisMessage = res)

    const [message, setMessage] = useState({
        date: thisMessage.date,
        text: thisMessage.text,
        userId: sessionStorage.getItem("nutshell_user")
        
    });
    

    useEffect(() => {
        if (messageId) {
            getMessageById(messageId)
                .then(message => {
                    setMessage(message)
                    setIsLoading(false)
                })
        } else {
            setIsLoading(false)
        }
    }, [])



    
    const handleControlledInputChange = (event) => {
      
      const editMessage = { ...message }
      let selectedVal = event.target.value
      editMessage[event.target.id] = selectedVal
      // update state
      setMessage(editMessage)
    }

    const handleSaveMessage = (event) => {
        event.preventDefault()
        editMessage({
            id: thisMessage.id,
            date: thisMessage.date,
            text: message.text,
            userId: sessionStorage.getItem("nutshell_user")
        })
            .then(() => history.push("/messages"))
        
    }
      
    

    return (
      <form className="messageForm">
        <h2 className="messageForm__title">Edit Post</h2>
        <fieldset>
          <div className="form-group">
            <textarea id="text"  autoFocus className="form-control"
            onChange={handleControlledInputChange}
            name="text"
            value={message.text}
            >{message.text}</textarea>
            
          </div>
        </fieldset>
        
        <button className="btn btn-primary"
          
          onClick={event => {
            handleSaveMessage(event)
          }}>
        Save Edit</button>
      </form>
    )
}
