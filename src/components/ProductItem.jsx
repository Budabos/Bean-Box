import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

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
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Card key={product.id} style={{ width: "18rem" }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          {product.category}
          <br />
          {product.recipe}
          <br />
          <button onClick={handleLike}>Like</button>
          {product.likes}
          {/* <br /> <br /> */}
          {product.flavours}
          <br />
          {product.price}
        </Card.Text>
      </Card.Body>
      <Button variant="success">Add to cart</Button>{" "}
    </Card>
  );
};

export default ProductItem;
