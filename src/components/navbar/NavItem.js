import { useContext, useState } from "react";
import { CartContext } from "../../context/cartContext";
import { Button, Modal } from "react-bootstrap";
import {BsTrash} from 'react-icons/bs'

const NavItem = ({ icon }) => {
  const { cart } = useContext(CartContext);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const subTotal = cart.length
      ? cart.map((item) => item.totalPrice).reduce((curr, acc) => curr + acc)
      : "";

  return (
    <li className={`nav-icon-item `}>
      <div className="tw-relative tw-cursor-pointer">
        {icon.type.name === "BsCart4" && cart.length !== 0 && (
          <div className="tw-absolute tw-pointer-events-none tw-z-10  tw-bottom-0 tw-right-0 tw-w-4 tw-h-4 tw-bg-white tw-rounded-full tw-flex tw-items-center tw-justify-center">
            <span className="tw-text-sm">{cart.length}</span>
          </div>
        )}
        {icon.type.name === "BsCart4" ? (
          <>
            <div onClick={handleShow}>{icon}</div>
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
                      <div className="tw-grid tw-grid-cols-3 tw-flex-1">
                        <span className="tw-ml-[17px]">{item.name}</span>
                        <span className="tw-ml-[20px]">{item.price}</span>
                        <span className="tw-ml-[20px]">x{item.quantity}</span>
                      </div>
                      <BsTrash className="tw-cursor-pointer" color="red" />
                    </div>
                  ))
                ) : (
                  <div>No items in cart</div>
                )}
                <div className="tw-mt-8">
                  <h4>Subtotal : Ksh.{subTotal}</h4>
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
        ) : (
          <div>{icon}</div>
        )}
      </div>
    </li>
  );
};

export default NavItem;
