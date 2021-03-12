import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { UserContext } from "../users/UserProvider"
import { FriendContext } from "./FriendProvider"



//HTML to display individual friends
export const UserCard = ({ userInstance }) => {
    const { getFriendById, newFriend, friends, getFriends, deleteFriend } = useContext(FriendContext)
    const { users, getUsers, getUserById } = useContext(UserContext)
    const [user, setUser] = useState({})
    const [friend, setFriend] = useState({})
    const currentUser = sessionStorage.getItem("nutshell_user")
    const history = useHistory()
    
    
    const friendDelete = () => {
        
        if (window.confirm("Delete Friend?")) {
            const userFriends = friends.filter(f => parseInt(f.currentUserId) === parseInt(currentUser))
            const relationship = userFriends.find(af => parseInt(af.friendUserId) === parseInt(userInstance.id)) 
            const id = relationship.id
            deleteFriend(id)
            .then(() => {
                history.push("/friends")
            })
        } else {
        }
    }
    
    

    useEffect(() => {
        getUsers()
        .then(getFriends)
        .then((response) => {})
    }, [])
    

    const handleAddFriend = () => {
        
        if (window.confirm("Add to Friends?")) {
            
            newFriend({            
                currentUserId: parseInt(currentUser),
                friendUserId: parseInt(userInstance.id)            
            })
                
                .then(() => {
                    history.push("/friends")
            })
        } else {

        }

    }
    



    const FriendDeleteButton = () => { 
            return <>
            <button onClick={friendDelete} className="button">Delete</button>
            </>     
    }
     


    const AddFriendButton = () => {

        if (parseInt(currentUser) !== parseInt(userInstance.Id)) {
            return <>
            <button onClick={handleAddFriend} className="button">Add Friend</button>
            </>
        } else {
            return null
        }
    }
    
    const allFriends = friends.filter(f => parseInt(f.currentUserId) === parseInt(currentUser))
    const isFriend = allFriends.find(af => parseInt(af.friendUserId) === parseInt(userInstance.id))    

    
    return (
            
            
        // const editDelete = () => {
        <section className="card">
        <h6 className="messagetimeStamp"></h6>
        <div className="messageText">{ userInstance.name }</div>
        <div>{ isFriend ? <FriendDeleteButton /> : <AddFriendButton /> }</div>
        
        
        

    </section>
    )
    
}

