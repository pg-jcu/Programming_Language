import NewsPage from './NewsPage';
import '../styles/NewsViewer.scss';
import { Route, Routes } from 'react-router-dom';

function NewsViewer() {
  return (
    <div className="NewsViewer">
      <Routes>
        <Route path='/' element={<NewsPage />}>
          <Route path=':category' element={<NewsPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default NewsViewer;