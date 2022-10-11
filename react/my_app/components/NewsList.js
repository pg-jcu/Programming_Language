import NewsItem from "./NewsItem";
import '../style/NewsList.scss';
import { useState, useEffect } from "react";
import { URL, API_KEY } from "../constants.js";

function NewsList({ category }) {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = category === 'all' ? '' : `&category=${category}`;
        const response = await fetch(URL + query + API_KEY);
        const json = await response.json();

        setArticles(json.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    }
    fetchData();
  }, [category]);

  if (loading) {
    return (
      <div className="NewsList">Loading...</div>
    );
  }

  if (!articles) {
    return null;
  }

  return (
    <div className="NewsList">
      {articles.map(article => (
        <NewsItem key={article.url} article={article} />
      ))}
    </div>
  );
}

export default NewsList;