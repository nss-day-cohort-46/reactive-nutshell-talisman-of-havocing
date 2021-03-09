import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const ArticleContext = createContext()

// This component establishes what data can be used.
export const ArticleProvider = (props) => {
    const [articles, setArticles] = useState([])

    // useState([])  is to hold and set the array of articles
    // useState() hook to define a variable that holds the state of the component, and a function that updates it.

    const getArticles = () => {
    return fetch("http://localhost:8088/articles?_expand=user")
        .then(response => response.json())
        .then(articlesData => setArticles(articlesData))
}

const addArticle = articlesObj => {
    return fetch("http://localhost:8088/articles", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(articlesObj)
    })
    .then(response => response.json())
}


const getArticleById = (id) => {
    return fetch(`http://localhost:8088/articles/${id}?`)
        .then(res => res.json())
}

const deleteArticle = articleId => {
    return fetch(`http://localhost:8088/articles/${articleId}`, {
        method: "DELETE"
    })
    .then(getArticles)
}

const updateArticle = article => {
return fetch(`http://localhost:8088/articles/${article.id}`, {
    method: "PUT",
    headers: {
    "Content-Type": "application/json"
    },
    body: JSON.stringify(article)
})
    .then(getArticles)
}

/*
    You return a context provider which has the
    `articles` state, `getArticles` function,
    and the `addArticle` function as keys. This
    allows any child elements to access them.
  */
    return (
    <ArticleContext.Provider value={{
    //   articles: articles, 
    //   getArticles: getArticles
        articles, getArticles, addArticle, getArticleById, deleteArticle, updateArticle
    }}>
        {props.children}
        </ArticleContext.Provider>
)
}