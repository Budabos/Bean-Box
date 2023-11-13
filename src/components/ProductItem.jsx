import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { BsFillSuitHeartFill } from "react-icons/bs";
import toast from "react-hot-toast";
import { CartContext } from "../context/cartContext";

// ProductItem Component
const ProductItem = ({ product, setProducts, products }) => {
  // Context for managing the cart state
  const { cart, setCart } = useContext(CartContext);

  // Extracting price from the product data
  const price = Number(product.price.split(" ")[1]);

  // Checking if the item is already in the cart
  const isItemInCart = cart.find((item) => item.id === product.id);

  // Function to handle the "Like" button click
  const handleLike = () => {
    const updatedLikes = Number(product.likes) + 1;


    fetch(
      `https://my-json-server.typicode.com/Budabos/Bean-Box/products/${product.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          likes: updatedLikes,
        }),
      }
    )
      .then((res) => res.json())
      .then((updatedProduct) => {
        const updatedProducts = products.map((item) => {
          if (item.id === product.id) {
            return updatedProduct;
          }

          return item;
        });
        setProducts(updatedProducts);

        // Showing a success toast notification
        toast.success(`${product.name} liked`);
      })
      .catch((err) => console.log(err));
  };

  // Component for displaying flavors
  const Flavors = () => {
    return (
      <div>
        {product?.flavors.map((flavor) => (
          <span key={flavor}>{flavor},</span>
        ))}
      </div>
    );
  };

  // Function to handle adding the product to the cart
  const handleAddToCart = () => {
    const foundCartItem = cart.find((item) => item.id === product.id);

    if (foundCartItem) {
      // Updating quantity and total price if the item is already in the cart
      const updatedCart = cart.map((item) => {
        const updatedQuantity = item.quantity + 1;
        const updatedTotalPrice = updatedQuantity * price;
        if (item.id === product.id) {
          return {
            ...item,
            quantity: updatedQuantity,
            totalPrice: updatedTotalPrice,
          };
        }

        return item;
      });

      // Setting the updated cart state
      setCart(updatedCart);

      // Showing a success toast notification
      toast.success(`${product.name} quantity updated successfully`);
      return;
    }

    // Adding the product to the cart with quantity and total price
    setCart([
      ...cart,
      {
        ...product,
        quantity: 1,
        totalPrice: price,
      },
    ]);

    // Showing a success toast notification
    toast.success(`${product.name} added to cart successfully`);
  };

  // Rendering the product card
  return (
    <Card key={product.id} className="col-3 p-0 pb-5 tw-relative">
      <Card.Img
        variant="top"
        className="tw-w-full tw-h-[300px]"
        src={product.image}
      />
      <Card.Body className="p-4">
        <Card.Title className="tw-text-center tw-overflow-hidden">
          {product.name}
        </Card.Title>
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
          <Button
            className="tw-absolute tw-bottom-[20px] tw-left-[50%] tw-translate-x-[-50%]"
            onClick={handleAddToCart}
            variant="success"
          >
            Add to cart
          </Button>
          {isItemInCart && `Quantity in cart : ${isItemInCart.quantity}`}
        </div>
      </Card.Body>
    </Card>
  );
};

// Exporting the ProductItem component
export default ProductItem;
