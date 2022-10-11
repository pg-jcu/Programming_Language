import NewsList from "./NewsList";
import NewsCategories from "./NewsCategories";
import '../style/NewsViewer.scss';
import { useCallback, useState } from "react";

function NewsViewer() {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback(category => setCategory(category), []);

  return (
    <div className="NewsViewer">
      <NewsCategories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </div>
  );
}

export default NewsViewer;