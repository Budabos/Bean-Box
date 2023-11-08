
import { Link } from "react-router-dom";
import ProductItem from "./ProductItem";

function ProductsList({ products, setProducts }) {

  return (
    <div className="tw-px-8 tw-mb-10 tw-grid tw-grid-cols-3 tw-space-y-10">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          products={products}
          setProducts={setProducts}
        />
      ))}
      <div className="tw-w-screen tw-ml-[-25px] tw-flex tw-items-center tw-justify-center">
        <Link to={"/products"} className="">
          <button className="tw-bg-green-600 tw-rounded-md">View all</button>
        </Link>
      </div>
    </div>
  );
}

export default ProductsList;
