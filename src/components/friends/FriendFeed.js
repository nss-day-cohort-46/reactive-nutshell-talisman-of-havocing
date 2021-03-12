import { ArticleContext, ArticleProvider } from "../article/ArticleProvider";
import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { UserContext } from "../users/UserProvider"
import { FriendContext } from "./FriendProvider"
import { EventContext } from "../events/EventProvider";
import { Article } from "./Article"
import "./Article.css"
import { useHistory } from "react-router-dom";

export const UserFeed = () => {

    const { friends } = useContext(FriendContext)
    const { users } = useContext(UserContext)
    const { articles } = useContext(ArticleContext)
    const { events } = useContext(EventContext)
    const currentUser = sessionStorage.getItem("nutshell_user")


}





export const FriendArticleList = () => {
    // This state changes when `getArticles()` is invoked below
    const { articles, getArticles } = useContext(ArticleContext)

    const history = useHistory()

    useEffect(() => {
        getArticles()
    }, [])

    const userFriends = friends.filter(f => parseInt(f.currentUserId) === parseInt(currentUser))
    const filteredArticles = articles.filter(art => art.userId === userFriends.friendUserID)

    return (
    <>
    <section>
        <h2>Articles</h2>
        <button onClick={() => { history.push("/articles/create") }}>New Article</button>

        <div className="articles">
        {
            filteredArticles.map(article => {
            return <Article key={article.id} article={article} />
        })
        }
        </div>
    </section>
    </>
)
}