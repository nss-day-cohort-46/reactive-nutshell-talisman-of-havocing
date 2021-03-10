import React, { useContext, useEffect, useState } from "react"
import { ArticleContext } from "./ArticleProvider"
import "./Article.css"
import { useParams, useHistory } from "react-router-dom"

export const ArticleDetail = () => {
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
        <section className="article">
        <h2 className="article__title">{article.title}</h2>
        <div className="article__synopsis">Synopsis: {article.synopsis}</div>
        <div className="article__url">{article.url}</div>
        {/* What's up with the question mark???? See below.*/}
        {/* ? is testing/trying to see if the location or customer property exist */}
        <div className="article__timestamp">Timestamp: {article.timestamp}</div>
        <button onClick={handleRelease}>Delete Article</button>
        <button onClick={() => { history.push(`/articles/edit/${article.id}`) }}>Edit</button>
        </section>
    )
}