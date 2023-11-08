
import { Link } from "react-router-dom";
import ProductItem from "./ProductItem";

function ProductsList({ products, setProducts }) {

  return (
    <div className="tw-grid tw-grid-cols-4 tw-space-y-2">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} products={products} setProducts={setProducts}/>
      ))}
      <Link to={"/products"}>
        <button>View all</button>
      </Link>
    </div>
  );
}

export default ProductsList;
