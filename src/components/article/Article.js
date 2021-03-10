import React from "react";
import { Link } from "react-router-dom"
import "./Article.css"


export const Article = ({article}) => {
    return (
    <section className="article">
        <h4 className="article__title">
        <Link to={`/articles/detail/${article.id}`}>
            { article.title }
        </Link>
        </h4>
    </section>
)
}