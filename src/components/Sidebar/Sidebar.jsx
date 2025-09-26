const Sidebar = ({
  cartItems = [],
  cartTotal = 0,
  cartItemCount = 0,
  onRemoveItem,
}) => {
  return (
    <aside className="bg-white rounded-2xl p-6 shadow-sm">
      <header className="mb-5 text-3xl font-semibold">
        <h2>Your Cart ({cartItemCount})</h2>
      </header>

      <section>
        <ul>
          {cartItems.map((item) => {
            const { id, name, price, quantity } = item;
            return (
              <li
                key={id}
                className="flex justify-between items-center border-b border-rust-light py-6">
                <div>
                  <h3 className="text-xl font-semibold">{name}</h3>
                  <div className="flex gap-4 justify-between max-w-5">
                    <span className="text-lg text-rust font-semibold">
                      {quantity}x
                    </span>
                    <span className="text-lg text-rust opacity-50">
                      @${price.toFixed(2)}
                    </span>
                    <span className="text-[#87635A] text-lg font-semibold">
                      ${(price * quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
                <button
                  aria-label="Remove Classic Tiramisu from cart"
                  className="flex w-6 h-6 rounded-full items-center justify-center border border-rust  text-rust text-xs text-semibold"
                  onClick={() => onRemoveItem(id)}>
                  X
                </button>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="py-6 flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <p className="text-lg">Order Total</p>
          <p className="text-4xl font-bold">${cartTotal.toFixed(2)}</p>
        </div>

        <div className="px-20 py-6 bg-rust-light">
          <p>
            This is a <strong>carbon-neutral</strong> delivery
          </p>
        </div>
      </section>

      <footer>
        <button className="flex items-center py-6 px-4 border border-rust rounded-full h-10 font-semibold text-white bg-rust w-full justify-center text-lg">
          Confirm Order
        </button>
      </footer>
    </aside>
  );
};

export default Sidebar;
