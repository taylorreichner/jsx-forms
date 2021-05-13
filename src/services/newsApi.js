const mungeNews = (json) =>
json.articles.map(({ title, description, author}) => ({
    title,
    text: description,
    link: author,
}))


export const fetchNews = async () => {
    const res = await fetch(`https://newsapi.org/v2/everything?q=apple&apiKey=${process.env.API_KEY}`)
    const json = await res.json()

    return mungeNews(json)
}

export const fetchNewsBySearch = async (searchQuery) => {
    const res = await fetch(
        `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${process.env.API_KEY}`
    )
    const json = await res.json()
    
    return mungeNews(json)
}