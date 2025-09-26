import { useState } from "react";
import AddToCart from "../AddToCart/AddToCart";
import { v4 as uuid } from "uuid";

const ProductCard = ({ products, cart, onAddToCart, onUpdateQuantity }) => {
  const [items] = useState(
    products.map((product) => ({ ...product, id: uuid() }))
  );

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
      {items.map((item) => {
        const { id, image, name, category, price } = item;
        const cartItem = cart.find((cartProduct) => cartProduct.id === item.id);
        const quantity = cartItem ? cartItem.quantity : 0;
        console.log(quantity);

        return (
          <article
            key={id}
            className="flex flex-col cursor-pointer">
            <figure className="relative aspect-square ">
              <img
                className="absolute inset-0 h-full w-full object-contain object-center rounded-3xl"
                src={image.desktop}
                alt={name}
              />
              <div className="absolute inset-x-0 flex justify-center bottom-[-15px] z-10">
                <AddToCart
                  className="absolute bottom-0 "
                  onAdd={() => onAddToCart(item)}
                  quantity={quantity}
                  onUpdateQuantity={(newQty) => onUpdateQuantity(id, newQty)}
                />
              </div>
            </figure>
            <div className="mt-8">
              {category && (
                <p className="text-lg text-rust opacity-50">{category}</p>
              )}
              {name && <h3 className="text-2xl my-1">{name}</h3>}
              {price && (
                <p className="text-xl font-semibold text-rust">
                  <span> {price} $</span>
                </p>
              )}
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default ProductCard;
