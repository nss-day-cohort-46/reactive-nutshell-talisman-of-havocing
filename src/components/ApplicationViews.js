import React, { useContext, useEffect } from "react"
import { Route } from "react-router-dom"
import { EventCard } from "./events/EventCard"

export const ApplicationViews = () => {
  const eventObj = {
    id: 1,
    userId: 1,
    name: "event name",
    date: "2021-03-15T09:00",
    location: "Palm Springs"
  }
  return (
    <>

      <Route exact path="/">
        <EventCard  eventObj={eventObj}/>
      </Route>
      <Route path="/friends">
        {/* Render the component for list of friends */}
      </Route>
      <Route path="/messages">
        {/* Render the component for the messages */}
      </Route>
      <Route path="/tasks">
        {/* Render the component for the user's tasks */}
      </Route>
      <Route path="/events">
        {/* Render the component for the user's events */}
      </Route>
    </>
  )
}
