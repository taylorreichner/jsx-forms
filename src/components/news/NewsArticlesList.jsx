import React from 'react';
import PropTypes from 'prop-types';
import Article from './article';

const NewsArticlesList = ({ articles }) => (
    <ul aria-label="articles">
        {articles.map((article) => (
            <li key={`${article.title}-${article.description}`}>
                <Article title={article.title} 
                text={article.text} 
                link={article.link}/>
            </li>
        ))}
    </ul>
)

NewsArticlesList.propTypes = {
    articles: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
        })
    ).isRequired,
}

export default NewsArticlesList;