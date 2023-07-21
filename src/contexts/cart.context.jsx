import { createContext, useState } from "react";
const addCartItem = (cartItems, productToAdd) => {
  const extistingItems = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (extistingItems) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems , {...productToAdd ,quantity:1}]
};

export const CartContext = createContext({
  isCartOpen: false,
  SetIsCartOpen: () => {},
  cartItems: [],
  addItemstoCart: () => {},
});
export const CartProvider = ({ children }) => {
  const [isCartOpen, setisCartOpen] = useState(false);
  const [cartItems, setcartItems] = useState([]);
  const addItemstoCart = (productToAdd) => {
    setcartItems(addCartItem(cartItems ,productToAdd))
  };
  const value = [isCartOpen, setisCartOpen , addItemstoCart , cartItems];
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
