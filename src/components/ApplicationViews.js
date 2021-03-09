import React from "react"
import { Route } from "react-router-dom"
import { ArticleProvider } from "./article/ArticleProvider";
import { ArticleList } from "./article/ArticleList";
import { ArticleDetail } from "./article/ArticleDetail";

export const ApplicationViews = () => {
  return (
    <>
      <ArticleProvider>
      <Route exact path="/">
        {/* Render the component for news articles */}
        <ArticleList />
      </Route>
      <Route path="/articles/detail/:articleId(\d+)">
        <ArticleDetail />
      </Route> 
      </ArticleProvider> 

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
