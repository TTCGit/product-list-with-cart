import { Children, createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [modal, setModal] = useState(false);
  const [cart, setCart] = useState([]);
  const totalItems = cart.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  const handleModal = () => {
    setModal(true);
  };

  const handleCloseModal = () => {
    setModal(false);
  };

  //- Cart
  const handleAddToCart = (product) => {
    const existingItem = cart.find((item) => item.name === product.name);

    if (!existingItem) {
      const newCart = [...cart, { ...product, quantity: 1 }];
      setCart(newCart);
    } else {
      const newCart = cart.map((item) =>
        item.name === product.name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(newCart);
    }
  };

  const handleInc = (product) => {
    const arr = cart.map((item) =>
      item.name === product.name
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setCart(arr);
  };
  const handleDec = (product) => {
    const arr = cart
      .map((item) =>
        item.name === product.name
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0);
    setCart(arr);
  };

  const handleDelete = (product) => {
    const arr = cart.filter((item) => item.name !== product.name);
    setCart(arr);
  };

  const handleReset = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        modal,
        setModal,
        handleModal,
        handleCloseModal,
        handleInc,
        handleAddToCart,
        handleDec,
        handleDelete,
        handleReset,
        totalItems,
        totalPrice,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
