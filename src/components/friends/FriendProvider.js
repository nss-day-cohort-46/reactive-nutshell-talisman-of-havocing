import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data. Makes a variable global.
export const FriendContext = createContext()

// This component establishes what data can be used.
export const FriendProvider = (props) => {
    const [friends, setFriends] = useState([])

    //standard getFriends function
    const getFriends = () => {
        return fetch("http://localhost:8088/friends")
        .then(res => res.json())
        .then(setFriends)
    }

    //POST function
    const newFriend = friendObj => {
        return fetch("http://localhost:8088/friends", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(friendObj)
        })
        .then(getFriends)
    }

    //function to get friend by ID
    const getFriendById = (id) => {
        return fetch(`http://localhost:8088/friends/${id}`)
            .then(res => res.json())
    }

    //function to delete a friend
    const deleteFriend = friendId => {
        return fetch(`http://localhost:8088/friends/${friendId}`, {
            method: "DELETE"
        })
            .then(getFriends)
    }


    
    

    //return the functions you want available
    return (
        <FriendContext.Provider value={{
            friends, getFriends, newFriend, getFriendById, deleteFriend
        }}>
            {props.children}
        </FriendContext.Provider>
    )

}