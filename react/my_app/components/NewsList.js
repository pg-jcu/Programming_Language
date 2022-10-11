import NewsItem from "./NewsItem";
import '../style/NewsList.scss';
import { URL, API_KEY } from "../constants.js";
import usePromise from "../lib/usePromise";

function NewsList({ category }) {
  const [loading, response, error] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;

    return fetch(URL + query + API_KEY);
  }, [category]);

  if (loading) {
    return (
      <div className="NewsList">Loading...</div>
    );
  }

  if (!response) {
    return null;
  }

  if (error) {
    return <div className="NewsList">Error!</div>;
  }

  const { articles } = response;

  return (
    <div className="NewsList">
      {articles.map(article => (
        <NewsItem key={article.url} article={article} />
      ))}
    </div>
  );
}

export default NewsList;