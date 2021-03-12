import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams, Link } from 'react-router-dom';
import { FriendsContext } from "./FriendsProvider"
import { UsersContext } from "../users/UsersProvider"



export const FriendConfirm = () => {
    const [user, setUser] = useState({})
    const { getFriends, addFriends } = useContext(FriendsContext)
    const { getUserById } = useContext(UsersContext)
    const { userId } = useParams()
    const history = useHistory()
    const currentUser = parseInt(sessionStorage.nutshell_user)
    
    useEffect(() => {
        getUserById(userId)
            .then((response) => {
                setUser(response)
            })
    }, [])

    useEffect(() => {
        getFriends()
    }, [])

    const handleClickAddFriend = (event) => {
        const newFriend = {
            currentUserId: currentUserId,
            userId: user.id
        }
        addFriends(newFriend)
            .then(() => {
                window.alert("Added!")
                history.push("/messages")
            })
    }


    const friendConditional = () => {
        const userFriends = friends.filter(f => parseInt(f.currentUserId) === parseInt(currentUser))

        if (currentUserId === user.id) {
            return (
                <section className="friendConfirm">
                    <h3 className="friendConfirm__message"> You can't be friends with yourself!</h3>
                    <div className="friendConfirm__buttons">
                        <Link to="/messages">
                            <button className="btn--edit">Back to messages.</button>
                        </Link>
                    </div>
                </section>
            )
        } else if (userCheck !== undefined) {
            return (
                <section className="friendConfirm">
                    <h3 className="friendConfirm__message">You are already friends with {user.name}.</h3>
                    <div className="friendConfirm__buttons">
                        <Link to="/messages">
                            <button className="btn--edit">Back to messages.</button>
                        </Link>
                    </div>
                </section>
            )
        }
        else {
            return (
                <section className="friendConfirm">
                    <h3 className="friendConfirm__message">Add {user.name} as a friend?</h3>
                    <div className="friendConfirm__buttons">
                        <button className="btn--create" onClick={handleClickAddFriend}>CONFIRM</button>
                        <Link to="/messages">
                            <button className="btn--delete">CANCEL</button>
                        </Link>
                    </div>
                </section>
            )
        }
    }



    return (
        friendConditional()
    )
}