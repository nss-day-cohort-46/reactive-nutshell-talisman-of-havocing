// import React from "react"
import { Route } from "react-router-dom"
import { ArticleProvider } from "./article/ArticleProvider";
import { ArticleList } from "./article/ArticleList";
import { ArticleDetail } from "./article/ArticleDetail";
import React, { useContext, useEffect } from "react"
import { MessageList } from "./messages/MessageList"
import { MessageProvider } from "./messages/MessageProvider"
import { EventProvider } from "./events/EventProvider"
import { TaskProvider } from './tasks/TaskProvider'
import { TaskList } from './tasks/TaskList'



export const ApplicationViews = () => {
  

  return (
    <>
      <ArticleProvider>
      <Route exact path="/">
        {/* Render the component for news articles */}
        <ArticleList />
        {/* Render the component for list of friends */}
      </Route>
      <Route path="/articles/detail/:articleId(\d+)">
        <ArticleDetail />
      </Route> 
      </ArticleProvider> 

      <Route path="/friends">
        {/* Render the component for list of friends */}
      </Route>
      <MessageProvider>
        <Route path="/messages">
          <MessageList />
          {/* Render the component for the messages */}
        </Route>
      </MessageProvider>
      <TaskProvider>
      <Route path="/tasks">
        <TaskList />
        {/* Render the component for the user's tasks */}
      </Route>
      </TaskProvider>
      <Route path="/events">
        {/* Render the component for the user's events */}
      </Route>
    </>
  )
}
