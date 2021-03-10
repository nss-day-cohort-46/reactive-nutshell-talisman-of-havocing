import React, { useContext, useEffect, useState } from "react"
import { ArticleContext } from "../article/ArticleProvider"
import "./Article.css"
import { useParams, useHistory } from 'react-router-dom';

const structureOfDate = {
    hour: '2-digit',
    minute: '2-digit',
    year: "numeric",
    month: "numeric",
    day: "numeric"
}

export const ArticleForm = () => {
    const { addArticle, getArticleById, updateArticle } = useContext(ArticleContext)
    const { getArticles } = useContext(ArticleContext)

    /*
    With React, we do not target the DOM with `document.querySelector()`. Instead, our return (render) reacts to state or props.

    Define the intial state of the form inputs with useState()
    */

    const [article, setArticles] = useState({
        id: "",
        userId: parseInt(sessionStorage.getItem("nutshell_user")),
        title: "",
        synopsis: "",
        url: "",
        timestamp: ""
    });

    const [isLoading, setIsLoading] = useState(true);
    const { articleId } = useParams();

    const history = useHistory();

    /*
    Reach out to the world and get articles state on initialization
    */
    useEffect(() => {
        getArticles()
    }, [])

    //when a field changes, update state. The return will re-render and display based on the values in state
        // NOTE! What's happening in this function can be very difficult to grasp. Read it over many times and ask a lot questions about it.
    //Controlled component
    const handleControlledInputChange = (event) => {
        /* When changing a state object or array,
        always create a copy, make changes, and then set state.*/
        const newArticle = { ...article }
        const dateRep = new Date()

        /* Animal is an object with properties.
        Set the property to the new value
        using object bracket notation. */
        newArticle[event.target.id] = event.target.value
        newArticle.timestamp = `${dateRep.toLocaleDateString('en-US', structureOfDate)}`
        // update state
        setArticles(newArticle)
    }

    const handleClickSaveArticle = () => {

        if (articleId){
            //PUT - update
            updateArticle({
                id: article.id,
                userId: article.userId,
                title: article.title,
                synopsis: article.synopsis,
                url: article.url,
                timestamp: article.timestamp
            })
            .then(() => history.push(`/articles/detail/${article.id}`))
        }else {
            //POST - add
            addArticle({
                id: article.id,
                userId: article.userId,
                title: article.title,
                synopsis: article.synopsis,
                url: article.url,
                timestamp: article.timestamp

            })
            
            .then(() => history.push("/articles"))
        }
        }


        // Get locations. If articleId is in the URL, getArticleById
useEffect(() => {
    getArticles().then(() => {

        // if there is data
    if (articleId) {
        getArticleById(articleId)
        .then(article => {
            setArticles(article)
            setIsLoading(false)
        })
    } else {
        // else there is no data
        setIsLoading(false)
    }
    })
}, [])

        return (
        <form className="articleForm">
            <h2 className="articleForm__title">{articleId ? "Edit Article" : "Add New Article"}</h2>
            <fieldset>
                <div className="article__title">
                    <label htmlFor="title">Article Title:</label>
                    <input type="text" id="title" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Article Title" value={article.title}/>
                </div>
            </fieldset>
            <fieldset>
                <div className="article__synopsis">
                    <label htmlFor="synopsis">Synopsis:</label>
                    <input type="text" id="synopsis" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Text" value={article.synopsis}/>
                </div>
            </fieldset>
            <fieldset>
                <div className="article__url">
                    <label htmlFor="url">Link:</label>
                    <input type="url" id="url" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="https://example.com" pattern="https://.*" value={article.url}/>
                </div>
            </fieldset>
            <fieldset>
                <div className="article__timeStamp">
                    <label htmlFor="timestamp">Timestamp:</label>
                    <input type="datetime" id="timestamp" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Timestamp" value={article.timestamp}/>
                </div>
                
            </fieldset>
            <button className="btn btn-primary"
                disabled={isLoading}

                onClick={event => {
                    event.preventDefault()
                    handleClickSaveArticle()
                }}>
                {articleId ? "Save Article" : "Add Article"}</button>
        </form>
    )
}