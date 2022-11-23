function SearchBar({ 
  filterText, 
  inStockOnly, 
  onFilterTextChange,
  onInStockChange
}) {
  return (
    <form className="SearchBar">
        <input 
          type="text" 
          placeholder="Search..." 
          value={filterText}
          onChange={(e) => onFilterTextChange(e.target.value)}
        />
        <div>
          <input 
            type="checkbox" 
            id="stocked" 
            checked={inStockOnly}
            onChange={(e) => onInStockChange(e.target.checked)}
          />
          <label htmlFor="stocked">Only show products in stock</label> 
        </div>
    </form>
  );
}

export default SearchBar;
