import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

function ProductTable({ data }) {
  return (
    <div className="ProductTable">
      ProductTable
      {data && data.map(d => <p key={d.name}>{d.name}</p>)}
      <ProductCategoryRow />
      <ProductRow />
    </div>
  );
}

export default ProductTable;
