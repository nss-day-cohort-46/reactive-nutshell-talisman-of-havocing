import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { UserContext } from "../users/UserProvider"
import { FriendContext } from "./FriendProvider"


//HTML to display individual friends
export const UserCard = ({ userInstance }) => {
    const { getFriendById, newFriend, friends, getFriends, deleteFriend } = useContext(FriendContext)
    const { users, getUsers } = useContext(UserContext)
    const [friend, setFriend] = useState({})
    const currentUser = sessionStorage.getItem("nutshell_user")
    const history = useHistory()
    
    const friendDelete = () => {
        deleteFriend()
        .then(() => {
            history.push("/friends")
        })
    }
    


    useEffect(() => {
        getUsers()
        // .then(getFriends)
        .then((response) => {
 
        })
        
    }, [])
    


    const handleAddFriend = () => {
        
        newFriend({
            
            currentUserId: parseInt(currentUser),
            friendUserId: parseInt(userInstance.id)
            
        })
            .then(() => history.push("/friends"))
    }
    
    const FriendDelete = () => {
        
        if (userInstance.id === parseInt(messageInstance.userId)) {
        
            
            return <>
            <button onClick={friendDelete} className="button">Delete</button>
            <button onClick={() => history.push(`/message/edit/${messageInstance.id}`)}>Edit</button>
            </>
            
        } else {
            return null
        }
    }
     
    const AddFriend = () => {

        if (parseInt(currentUser) !== parseInt(userInstance.Id)) {
            return <>
            <button onClick={handleAddFriend} className="button">Add Friend</button>
            </>
        } else {
            return null
        }
    }
    
    const allFriends = friends.filter(f => parseInt(f.currentUserId) === parseInt(currentUser))
    console.log(allFriends)
    const isFriend = allFriends.find(af => parseInt(af.friendUserId) === parseInt(userInstance.id))    
    
    return (
            
            
        // const editDelete = () => {
        <section className="message">
        <h6 className="messagetimeStamp"></h6>
        <div className="messageText">{ userInstance.name }</div>
        <div>{ isFriend }</div>
        <div>{ isFriend ? <FriendDelete /> : <AddFriend /> }</div>
        
        

    </section>
    )
    
}

