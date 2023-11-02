
import React from 'react'
import "./article.css"

const Article = ({ img, description, title, source, subtitle, reverse }) =>
{
  
    const articleClass = `parallax-article ${ reverse ? 'reverse' : '' }`;

    return (
        <div className='container-fluid my-4 text-start'>
            
            <div className={ articleClass }>

                <div className="article-image">
                    
                    <img src={ img } alt="Immagine dell'articolo" />
                </div>
                <div className="article-description">
                <h1 className='h1_article'>{title}</h1>
                    <h3 className='h3_article'>{ subtitle }</h3>
                    <p>{ description }</p>
                    <span>{ source }</span>
                </div>
            </div>
        </div>

    )
}

export default Article;

