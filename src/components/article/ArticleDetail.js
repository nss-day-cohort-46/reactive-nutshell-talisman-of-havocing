import React, { useContext, useEffect, useState } from "react"
import { ArticleContext } from "./ArticleProvider"
import "./Article.css"
import { useParams, useHistory } from "react-router-dom"


export const ArticleDetail = (currentUserId) => {
    const { getArticleById, deleteArticle } = useContext(ArticleContext)

    const [article, setArticles] = useState({})

    const {articleId} = useParams();
    const history = useHistory();

    useEffect(() => {
        console.log("useEffect", articleId)
        getArticleById(articleId)
        .then((response) => {
            setArticles(response)
        })
    }, [])

    const handleRelease = () => {
        deleteArticle(article.id)
        .then(() => {
            history.push("/articles")
        })
    }

    return (
        <section className={parseInt(currentUserId) === article.userId ? "currentUser" : "otherUserArticle"}>
        <div className="article">
        <h2 className="article__title">{article.title}</h2>
        <div className="article__synopsis">Synopsis: {article.synopsis}</div>
        <a className="article__url" href={ article.url } target="_blank">{ article.url }</a>
        <div className="article__timestamp">Timestamp: {article.timestamp}</div>
        {parseInt(sessionStorage.getItem("nutshell_user")) === article.userId ?
        <div>
            <button className="deleteArticleButton" onClick={handleRelease}>Delete</button>
            <button className="editArticleButton" onClick={() => { history.push(`/articles/edit/${article.id}`) }}>Edit</button>
        </div>
        : ""}
        </div>
        </section>
    )
}
