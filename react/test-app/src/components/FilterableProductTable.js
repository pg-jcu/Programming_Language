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
  const [data, setData] = useState(products);
  return (
    <div className="FilterableProductTable">
      FilterableProductTable
      <SearchBar />
      <ProductTable data={data} />
    </div>
  );
}

export default FilterableProductTable;
