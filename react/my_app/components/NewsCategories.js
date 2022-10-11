import '../style/NewsCategories.scss';

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

function NewsCategories({ onSelect, category }) {
  return (
    <div className="NewsCategories">
      {categories.map(c => (
        <div 
          className="category" 
          key={c.name}
          onClick={() => onSelect(c.name)}
        >
          {c.text}
        </div>
      ))}
    </div>
  );
}

export default NewsCategories;