import { NavLink } from 'react-router-dom';
import '../styles/NewsCategories.scss';

const categories = [
  {
    name: 'all',
    text: 'All'
  },
  {
    name: 'business',
    text: 'Business'
  },
  {
    name: 'entertainment',
    text: 'Entertainment'
  },
  {
    name: 'health',
    text: 'Health'
  },
  {
    name: 'science',
    text: 'Science'
  },
  {
    name: 'sports',
    text: 'Sports'
  },
  {
    name: 'technology',
    text: 'Technology'
  }
];

function NewsCategories() {
  return (
    <div className="NewsCategories">
      {categories.map(c => (
        <NavLink 
          className={({ isActive }) => "category" + (isActive ? " activated" : "")}
          key={c.name}
          to={c.name === 'all' ? './' : `${c.name}`}
        >
          {c.text}
        </NavLink>
      ))}
    </div>
  );
}

export default NewsCategories;