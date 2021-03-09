import React, { useEffect, useContext, useState } from "react"
import { Article } from "./Article"
import "./Article.css"
import { ArticleContext } from "./ArticleProvider"
import { useHistory } from "react-router-dom";


export const ArticleList = () => {
    // This state changes when `getArticles()` is invoked below
    const { articles, getArticles, searchTerms } = useContext(ArticleContext)

    const [ filteredArticles, setFiltered ] = useState([])
    const history = useHistory()

    useEffect(() => {
        getArticles()
    }, [])

    useEffect(() => {
        if (searchTerms !== "") {
            // If the search field is not blank, display matching articles
            const subset = articles.filter(article => article.name.toLowerCase().includes(searchTerms))
            setFiltered(subset)
        } else {
            // If the search field is blank, display all articles
            setFiltered(articles)
        }
        }, [searchTerms, articles])

    return (
    <>
        <h1>Articles</h1>
        <button onClick={() => { history.push("/articles/create") }}>Add Article</button>

        <div className="articles">
        {
            filteredArticles.map(article => {
            return <Article key={article.id} article={article} />
        })
        }
        </div>
    </>
)
}

