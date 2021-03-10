import React, { useContext, useEffect, useState } from "react"
import { MessageContext } from "./MessageProvider"
import { useHistory } from "react-router-dom"
import { UserContext } from "../users/UserProvider"
import { FriendContext } from "../friends/FriendProvider"


//HTML to display individual messages
export const MessageCard = ({ messageInstance }) => {
    const { getMessageById, deleteMessage, editMessage, getMessages } = useContext(MessageContext)
    const { users, getUsers } = useContext(UserContext)
    const { friends, getFriends } = useContext(FriendContext)
    
    const [message, setMessage] = useState({})
    
    
    let user = users.find(user => user.id === parseInt(messageInstance.userId))
 
    
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
    
        
    const currentUser = sessionStorage.getItem("nutshell_user")

    const { newFriend } = useContext(FriendContext)
    const handleAddFriend = () => {
        //disable the button - no extra clicks
        
          //POST - add
        newFriend({
            
            currentUserId: parseInt(currentUser),
            friendUserId: parseInt(messageInstance.userId)
            
        })
            .then(() => history.push("/messages"))
    }
    
    const EditDelete = () => {
        
        if (parseInt(currentUser) === parseInt(messageInstance.userId)) {
        
            
            return <>
            <button onClick={messageDelete} className="button">Delete</button>
            <button onClick={() => history.push(`/message/edit/${messageInstance.id}`)}>Edit</button>
            </>
            
        } else {
            return null
        }
    }
     
    const AddFriend = () => {

        const allFriends = friends.filter(f => f.currentUserId === parseInt(currentUser))
        console.log(allFriends)

        if (parseInt(currentUser) !== parseInt(messageInstance.userId)) {
            return <>
            <button onClick={handleAddFriend} className="button">Add Friend</button>
            </>
        } else {
            return null
        }
    }
        
        
    return (
            
            
        // const editDelete = () => {
        <section className="message">
        <h6 className="messagetimeStamp">{ newDate }</h6>
        <div className="messageText">{ messageInstance.text }</div>
        <div>--{user ? user.name : "no user"}</div>
        <EditDelete />
        <AddFriend />

    </section>
    )
    
}

