import React, { Component } from 'react';
import NewsArticleList from '../components/news/NewsArticlesList';
import { fetchNews } from '../services/newsApi';

export default class NewsContainer extends Component {
  state = {
    loading: true,
    articles: [],
  };

  async componentDidMount() {
    const articles = await fetchNews();
    this.setState({
      articles,
      loading: false,
    });
  }

  render() {
    const { loading, articles } = this.state;

    if (loading) return <h1>Loading...</h1>;

    return <NewsArticleList articles={articles} />;
  }
}
