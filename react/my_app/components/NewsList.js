import NewsItem from "./NewsItem";
import '../style/NewsList.scss';
import { useState, useEffect } from "react";
import { URL } from "../constants.js";

function NewsList() {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(URL);
        const json = await response.json();

        setArticles(json.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    }
    fetchData();
  }, []);

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