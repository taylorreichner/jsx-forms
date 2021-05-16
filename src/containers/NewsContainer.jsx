import React, { Component } from 'react';
import NewsArticleList from '../components/news/NewsArticlesList';
import { fetchNews, fetchNewsBySearch } from '../services/newsApi';
import Controls from '../components/news/Controls';

export default class NewsContainer extends Component {
  state = {
    loading: true,
    articles: [],
    searchParams: '',
  };

  async componentDidMount() {
    const articles = await fetchNews();
    this.setState({
      articles,
      loading: false,
    });
  }

  handleArticlesChange = ( { target } ) => {
    this.setState({ searchParams: target.value})
  }

  handleSubmit = async (e) => {
    e.preventDefault()

    this.setState({loading: true})
    const newArticles = await fetchNewsBySearch(this.state.searchParams)
    this.setState({
      loading: false,
      articles: newArticles,
    })
  }

  render() {
    const { loading, articles, searchParams } = this.state;
    return (  
    
      <div>
        <Controls 
          handleSearchInput={this.handleArticlesChange}
          onSubmit={this.handleSubmit}
          inputValue={searchParams}
        />
        {loading
					? 	<p>Loading...</p>
					: 	<NewsArticleList 
							articles={articles}
						/>
				}

      </div>
    )
    
  }
}
