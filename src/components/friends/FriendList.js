import { useContext, useEffect, useState } from "react"
import { UserContext } from "../users/UserProvider"
import { UserCard } from "./FriendCard"
import { FriendContext } from "./FriendProvider"



export const FriendList = () => {
  
  const { getUsers, users, searchTerms} = useContext(UserContext)
  // Since you are no longer ALWAYS displaying all of the users
  const [ filteredUsers, setFiltered ] = useState([])

  // Initialization effect hook -> Go get friend data
  useEffect(()=>{
    getUsers()
  }, [])

  useEffect(() => {
    if (searchTerms !== "") {
      // If the search field is not blank, display matching users
      const subset = users.filter(user => user.name === searchTerms)
      console.log(subset)
      
      setFiltered(subset)
    } else {
      // If the search field is blank, display all users
      setFiltered(users)
    }
  }, [searchTerms, users])

    return (
      <>
          <h1>Friends</h1>

          
          <div className="users">
              {
                  filteredUsers.map(userObject => {
                      return <UserCard key={userObject.id} userInstance={userObject} />
                  })
              }
          </div>
      </>
  )
}