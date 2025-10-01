import { useState } from "react";
import Layout from "./components/Layout/Layout";
import ProductList from "./components/ProductList/ProductList";
import Sidebar from "./components/Sidebar/Sidebar";
import data from "./data.json";

const App = () => {
  const [cart, setCart] = useState([]);

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
    <div>
      <Layout>
        <ProductList
          products={data}
          onAddToCart={handleAddToCart}
        />
        <Sidebar
          cart={cart}
          onInc={handleInc}
          onDec={handleDec}
          onDel={handleDelete}
          onReset={handleReset}
        />
      </Layout>
    </div>
  );
};

export default App;
