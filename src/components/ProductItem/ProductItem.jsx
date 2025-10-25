import { ShoppingCart } from "lucide-react";
import { useCartContext } from "../../context/CartContext";

const ProductItem = ({ product }) => {
  const { handleAddToCart } = useCartContext();
  const { image, category, name, price } = product;
  return (
    <article>
      <figcaption className="relative flex flex-col items-center">
        <img
          src={image.desktop}
          alt={name}
          className="rounded-lg"
        />
        <button
          className="btn group absolute bottom-[-25px] left-1/2 
				-translate-x-1/2 border border-rust bg-egg
				hover:bg-rust hover:text-white cursor-pointer"
          onClick={() => handleAddToCart(product)}>
          <ShoppingCart className="w-5 h-5 text-rust transition-colors duration-300 ease-in-out group-hover:text-white" />
          Bagă'n coș
        </button>
      </figcaption>
      <div className="pt-10">
        <p className="text-rust-dark opacity-60">{category}</p>
        <p className="font-semibold text-xl">{name}</p>
        <p className="font-semibold text-lg text-rust">{price}RON</p>
      </div>
    </article>
  );
};

export default ProductItem;
