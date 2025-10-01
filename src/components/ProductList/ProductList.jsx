import ProductItem from "../ProductItem/ProductItem";

const ProductList = ({ products, onAddToCart }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
      {products.map((product, i) => {
        return (
          <ProductItem
            key={i}
            product={product}
            onAddToCart={onAddToCart}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
