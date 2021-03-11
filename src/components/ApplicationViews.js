import React from "react"
import { Route } from "react-router-dom"
import { ArticleProvider } from "./article/ArticleProvider";
import { ArticleList } from "./article/ArticleList";
import { ArticleDetail } from "./article/ArticleDetail";
import { ArticleForm } from "./article/ArticleForm";
import { MessageList } from "./messages/MessageList"
import { MessageProvider } from "./messages/MessageProvider"
import { EventList } from "./events/EventList"
import { EventProvider } from "./events/EventProvider"
import { UserProvider } from "./users/UserProvider"
import { MessageEdit } from "./messages/MessageEdit"
import { TaskProvider } from './tasks/TaskProvider'
import { TaskList } from './tasks/TaskList'
import { TaskForm } from './tasks/TaskForm'



export const ApplicationViews = () => {

  return (
    <>
        <ArticleProvider>
          <Route exact path="/">
          {/* Render the component for news articles */}
          {/* <ArticleList /> */}
          </Route>
          <Route exact path="/articles">
          {   /* Render the component for news articles */}
            <ArticleList />
          {/* Render the component for list of friends */}
          </Route>
          <Route path="/articles/create">
            <ArticleForm />
          </Route>
          <Route path="/articles/detail/:articleId(\d+)">
            <ArticleDetail />
          </Route>
          <Route path="/articles/edit/:articleId(\d+)">
            <ArticleForm />
          </Route>   
          </ArticleProvider> 

          <Route path="/friends">
        {/* Render the component for list of friends */}
          </Route>
          <MessageProvider>

          <UserProvider>
          <Route exact path="/messages">
              <MessageList />
              {/* Render the component for the messages */}
          </Route>
          <Route path="/message/edit/:messageId(\d+)">
              <MessageEdit />
          </Route>
        </UserProvider>

      </MessageProvider>
      
      <TaskProvider>
      <Route path="/tasks">
        <TaskList />
        {/* Render the component for the user's tasks */}
        </Route>
        
        
      <Route path="/tasks/create">
        <TaskForm />
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
