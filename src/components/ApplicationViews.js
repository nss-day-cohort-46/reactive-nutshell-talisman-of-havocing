import React from "react"
import { Route } from "react-router-dom"
import { ArticleProvider } from "./article/ArticleProvider";
import { ArticleList } from "./article/ArticleList";
import { ArticleDetail } from "./article/ArticleDetail";
import { ArticleForm } from "./article/ArticleForm";
import { ArticleSearch } from "./article/ArticleSearch";
import { MessageList } from "./messages/MessageList"
import { MessageProvider } from "./messages/MessageProvider"
import { EventList } from "./events/EventList"
import { EventProvider } from "./events/EventProvider"
import { WeatherProvider } from "./weather/WeatherProvider"
import { UserProvider } from "./users/UserProvider"
import { MessageEdit } from "./messages/MessageEdit"
import { TaskProvider } from './tasks/TaskProvider'
import { TaskList } from './tasks/TaskList'
import { FriendProvider } from "./friends/FriendProvider"
import { UserSearch } from "./friends/UserSearch"
import { FriendList } from "./friends/FriendList"
import { TaskForm } from './tasks/TaskForm'

export const ApplicationViews = () => {
  
  return (
    <>
      <Route exact path="/">
        {/* Render the component for list of friends */}
      </Route>
      <FriendProvider>
        <UserProvider>
          <Route path="/friends">
            <UserSearch />
            <FriendList />
            {/* Render the component for list of friends */}
          </Route>
        </UserProvider>
      </FriendProvider>
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
      <ArticleProvider>
        <Route exact path="/">
          {/* Render the component for news articles */}
          {/* <ArticleList /> */}
        </Route>
        <Route exact path="/articles">
          {   /* Render the component for news articles */}
          <ArticleSearch />
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
      <TaskProvider>
      <Route path="/tasks/create">
          <TaskForm />
        </Route>
        <Route path="/tasks" >
          <TaskList />
          {/* Render the component for the user's tasks */}
        </Route>
       
        <Route exact path="/tasks/edit/:taskId(\d+)">
          <TaskForm />
        </Route>
      </TaskProvider>
      <Route exact path="/events">
        <EventProvider>
          <WeatherProvider>
            <EventList />
          </WeatherProvider>
        </EventProvider>
      </Route>
    </>
  )
}
