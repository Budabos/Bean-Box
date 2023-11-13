import { createContext, useState } from "react";

//Create a context instance
const CartContext = createContext();

//Create the Provider from the context instance
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [searchText, setSearchText] = useState('');

  return (
    <CartContext.Provider value={{ cart, setCart, searchText, setSearchText }}>
      {children}
    </CartContext.Provider>
  );
};

//Export both the context instance and the provider
export { CartContext, CartProvider };
