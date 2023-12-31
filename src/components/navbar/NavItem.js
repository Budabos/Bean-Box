import { useContext, useState } from "react";
import { CartContext } from "../../context/cartContext";
import { Button, Modal } from "react-bootstrap";
import { BsTrash } from "react-icons/bs";

const NavItem = ({ icon, setShowSearch }) => {
  const { cart, setCart } = useContext(CartContext);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const subTotal = cart.length
    ? cart.map((item) => item.totalPrice).reduce((curr, acc) => curr + acc)
    : "";

  const changeQuantity = (id, e) => {
    console.log(e.target.value);

    if (e.target.value < 1) return;

    const updatedItems = cart.map((item) => {
      if (item.id === id) {
        const price = Number(item.price.split(" ")[1]);
        const updatedTotalPrice = Number(e.target.value) * price;
        return {
          ...item,
          quantity: Number(e.target.value),
          totalPrice: updatedTotalPrice,
        };
      }

      return item;
    });

    setCart(updatedItems);
  };

  const deleteCartItem = (id) => {
    const updatedItems = cart.filter((item) => item.id !== id);

    setCart(updatedItems);
  };

  return (
    <li className={`nav-icon-item `}>
      <div className="tw-relative tw-cursor-pointer">
        {icon.type.name === "BsCart4" && cart.length !== 0 && (
          <div className="tw-absolute tw-pointer-events-none tw-z-10 tw-bottom-[0.125rem] tw-right-[0.12rem] tw-p-[0.125rem] tw-rounded-full tw-flex tw-items-center tw-justify-center tw-bg-white">
            <div className=" tw-bg-black tw-h-1.5 tw-w-1.5 tw-rounded-full tw-flex tw-items-center tw-justify-center" />
          </div>
        )}
        {icon.type.name === "BsCart4" ? (
          <>
            <div className="tw-w-[25px]" onClick={handleShow}>
              {icon}
            </div>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Cart</Modal.Title>
              </Modal.Header>
              <Modal.Body className="tw-flex tw-flex-col tw-gap-[12px]">
                {cart.length ? (
                  cart.map((item) => (
                    <div key={item.id} className="tw-flex tw-items-center">
                      <img
                        className="tw-h-[50px] tw-w-[50px] tw-rounded-md"
                        src={item.image}
                      />
                      <div className="tw-grid tw-grid-cols-3 tw-flex-1 tw-items-center">
                        <span className="tw-ml-[17px]">{item.name}</span>
                        <span className="tw-ml-[20px]">{item.price}</span>
                        <input
                          className="tw-ml-[20px] tw-w-[70px]"
                          type="number"
                          value={item.quantity}
                          onChange={(e) => changeQuantity(item.id, e)}
                        />
                      </div>
                      <BsTrash
                        onClick={() => deleteCartItem(item.id)}
                        className="tw-cursor-pointer"
                        color="red"
                      />
                    </div>
                  ))
                ) : (
                  <div>No items in cart</div>
                )}
                <div className="tw-mt-8">
                  <h4 className="tw-overflow-hidden">
                    Subtotal : Ksh.{subTotal}
                  </h4>
                </div>
              </Modal.Body>
              <Modal.Footer className="tw-flex tw-items-center tw-justify-center">
                <Button
                  variant={cart.length ? "primary" : "disabled"}
                  disabled={!cart.length}
                  onClick={handleClose}
                >
                  Proceed to checkout
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        ) : icon.type.name === "IoSearchOutline" ? (
          <div onClick={() => setShowSearch((prev) => !prev)}>{icon}</div>
        ) : (
          <div>{icon}</div>
        )}
      </div>
    </li>
  );
};

export default NavItem;
