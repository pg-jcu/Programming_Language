function SearchBar() {
  return (
    <div className="SearchBar">
        <input type="text" placeholder="Search..." />
        <div>
          <input type="checkbox" id="stocked" />
          <label htmlFor="stocked">Only show products in stock</label> 
        </div>
    </div>
  )
}

export default SearchBar;
