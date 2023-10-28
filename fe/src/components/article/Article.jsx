import React from 'react'
import "./article.css"



const Article = ({ img, description, source, subtitle, reverse }) =>
{

    const articleClass = `parallax-article ${ reverse ? 'reverse' : '' }`;

    return (
        <div className={articleClass}>
            <div className="article-image">
                <img src={ img } alt="Immagine dell'articolo" />
            </div>
            <div className="article-description">
                <p>{ description }</p>
            </div>
        </div>
    )
}

export default Article;

