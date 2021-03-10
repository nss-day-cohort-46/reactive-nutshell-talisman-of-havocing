import React from "react"
import { Route } from "react-router-dom"
import { EventList } from "./events/EventList"
import { EventProvider } from "./events/EventProvider"
import { MessageList } from "./messages/MessageList"
import { MessageContext, MessageProvider } from "./messages/MessageProvider"
import { EventContext } from "./events/EventProvider"
import { UserProvider } from "./users/UserProvider"
import { MessageEdit } from "./messages/MessageEdit"
import { TaskProvider } from './tasks/TaskProvider'
import { TaskList } from './tasks/TaskList'
import { FriendProvider } from "./friends/FriendProvider"



export const ApplicationViews = () => {


  return (
    <>
      <Route exact path="/">
        {/* Render the component for list of friends */}
      </Route>
      <Route path="/friends">
        {/* Render the component for list of friends */}
      </Route>
      <MessageProvider>
        <FriendProvider>
          <UserProvider>
            <Route exact path="/messages">
                <MessageList />
                {/* Render the component for the messages */}
            </Route>
            <Route path="/message/edit/:messageId(\d+)">
                <MessageEdit />
            </Route>
          </UserProvider>
        </FriendProvider>
      </MessageProvider>
      <TaskProvider>
        <Route path="/tasks">
          <TaskList />
        </Route>
      </TaskProvider>
      <Route exact path="/events">
        <EventProvider>
          <EventList />
        </EventProvider>
      </Route>
    </>
  )
}
