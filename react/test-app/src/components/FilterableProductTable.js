import { useState } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import "../styles/ProductTable.css";

const products = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

function FilterableProductTable() {
  const [state, setState] = useState({
    filterText: '',
    inStockOnly: false
  });

  const handleFilterTextChange = (filterText) => {
    setState({
      ...state,
      filterText: filterText
    });
  };

  const handleInStockChange = (inStockOnly) => {
    setState({
      ...state,
      inStockOnly: inStockOnly
    });
  };

  return (
    <div className="FilterableProductTable">
      <SearchBar 
        filterText={state.filterText}
        inStockOnly={state.inStockOnly}
        onFilterTextChange={handleFilterTextChange}
        onInStockChange={handleInStockChange}
      />
      <ProductTable  
        products={products}
        filterText={state.filterText}
        inStockOnly={state.inStockOnly}
      />
    </div>
  );
}

export default FilterableProductTable;
