import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { BsFillSuitHeartFill } from "react-icons/bs";
import toast from "react-hot-toast";

const ProductItem = ({ product, setProducts, products }) => {
  const handleLike = () => {
    const updatedLikes = Number(product.likes) + 1;

    fetch(`http://localhost:8000/products/${product.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likes: updatedLikes,
      }),
    })
      .then((res) => res.json())
      .then((updatedProduct) => {
        {
          const updatedProducts = products.map((item) => {
            if (item.id === product.id) {
              return updatedProduct;
            }

            return item;
          });
          setProducts(updatedProducts);

          toast.success(`${product.name} liked`);
        }
      })
      .catch((err) => console.log(err));
  };

  const Flavors = () => {
    return (
      <div>
        {product.flavors.map((flavor) => (
          <span>{flavor},</span>
        ))}
      </div>
    );
  };

  return (
    <Card key={product.id} className="tw-w-[23rem]">
      <Card.Img
        variant="top"
        className="tw-w-full tw-h-[300px]"
        src={product.image}
      />
      <Card.Body>
        <Card.Title className="tw-text-center">{product.name}</Card.Title>
        <Card.Text>
          <div className="tw-text-center">{product.category}</div>
          <br />
          {product.recipe}
          <br />
          <div className="tw-flex tw-items-center tw-gap-2 tw-my-2 tw-font-semibold">
            <span>Flavors available:</span> <Flavors />
          </div>
          <div className="tw-flex tw-flex-row-reverse tw-items-center tw-justify-between">
            <BsFillSuitHeartFill
              className="tw-cursor-pointer"
              size={21}
              onClick={handleLike}
              color="red"
            />
            <span>{product.price}</span>
          </div>
        </Card.Text>
        <div>
          <Button variant="success">Add to cart</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductItem;
