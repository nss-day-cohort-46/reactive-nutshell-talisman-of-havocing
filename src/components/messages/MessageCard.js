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
        if (window.confirm("Add to Friends?")) {

            newFriend({
                currentUserId: parseInt(currentUser),
                friendUserId: parseInt(messageInstance.userId)      
            })
                .then(() => history.push("/messages"))
    } else {

    }
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

        console.log("allFriends:", allFriends)
        const isFriend = allFriends.find(af => parseInt(af.friendUserId) === parseInt(messageInstance.userId))
        console.log("isFriend:", isFriend)
        
        if (parseInt(currentUser) !== parseInt(messageInstance.userId)) {
            return <>
            <button onClick={handleAddFriend} className="button">Add Friend</button>
            </>
        } else {
            return null
        }
    }
    
    const allFriends = friends.filter(f => f.currentUserId === parseInt(currentUser))
    const isFriend = allFriends.find(af => parseInt(af.friendUserId) === parseInt(messageInstance.userId))    
    return (
            
            
        // const editDelete = () => {
        <section className="card">
        <h6 className="messagetimeStamp">{ newDate }</h6>
        <div className="messageText">{ messageInstance.text }</div>
        <div>--{user ? user.name : "no user"}</div>
        <div>{ isFriend ? null : <AddFriend /> }</div>
        <EditDelete />
        

    </section>
    )
    
}

