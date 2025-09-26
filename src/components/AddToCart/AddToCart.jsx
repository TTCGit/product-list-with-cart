import { ShoppingCart } from "lucide-react";
import { useState } from "react";

const AddToCart = ({ onAdd, quantity, onUpdateQuantity }) => {
  const handleQtyAdd = () => {
    onUpdateQuantity(quantity + 1);
  };

  const handleQtySub = () => {
    if (quantity > 1) {
      onUpdateQuantity(quantity - 1);
    } else {
      onUpdateQuantity(0); // Revine la "Add to cart"
    }
  };

  const baseCTA =
    "  inline-flex items-center py-6 px-4 border border-rust rounded-full h-10 w-40 font-semibold";
  const controllers =
    "flex w-6 h-6  rounded-full items-center justify-center border border-white  text-white";

  return (
    <>
      {quantity === 0 ? (
        <div className={`${baseCTA} justify-center bg-white`}>
          <button
            className="flex justify-center items-center gap-2 text-rust"
            onClick={onAdd}>
            <ShoppingCart className="w-4 h-4" />
            Add to cart
          </button>
        </div>
      ) : (
        <div
          className={`${baseCTA} bg-rust text-white flex justify-between gap-2`}>
          <button
            className={controllers}
            onClick={handleQtySub}>
            -
          </button>
          <span>{quantity}</span>
          <button
            className={controllers}
            onClick={handleQtyAdd}>
            +
          </button>
        </div>
      )}
    </>
  );
};

export default AddToCart;
