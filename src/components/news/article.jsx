import React from 'react';
import PropTypes from 'prop-types';

const Article = ({title, text, link}) => (
    <figure>
        <figcaption>{title}</figcaption>
        <figcaption>{text}</figcaption>
        <figcaption>{link}</figcaption>
    </figure>
);

Article.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
}

export default Article;