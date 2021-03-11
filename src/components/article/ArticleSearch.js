import React, { useContext } from "react"
import { ArticleContext } from "./ArticleProvider"
import "./Article.css"

export const ArticleSearch = () => {
    const { setSearchTerms } = useContext(ArticleContext)

    return (
        <>
        Article search:
        <input type="text"
            className="input--wide"
            onKeyUp={(event) => setSearchTerms(event.target.value)}
            placeholder="Search for a article... " />
        </>
    )
}