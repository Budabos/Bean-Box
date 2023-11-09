
import { Link } from "react-router-dom";
import ProductItem from "./ProductItem";

function ProductsList({ products, setProducts }) {

  return (
    <div className="tw-px-8 tw-mb-10 row row-gap-4 column-gap-4 justify-content-center ">
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
