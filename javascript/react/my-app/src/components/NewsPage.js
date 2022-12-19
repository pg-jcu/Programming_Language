import { useParams } from "react-router-dom";
import NewsCategories from "./NewsCategories";
import NewsList from "./NewsList";

function NewsPage() {
  const category = useParams().category || 'all';
  
  return (
    <>
      <NewsCategories />
      <NewsList category={category} />
    </>
  );
}

export default NewsPage;