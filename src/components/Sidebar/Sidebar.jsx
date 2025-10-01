import { useState } from "react";
import Modal from "../Modal/Modal";

const Sidebar = ({ cart, onInc, onDec, onDel, onReset }) => {
  const totalItems = cart.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    console.log(cart);
    setModal(true);
  };

  const handleCloseModal = () => {
    setModal(false);
  };

  return (
    <aside>
      <div className="p-10 bg-white rounded-lg">
        <h2 className="mb-6 text-rust">Coșarca ta ({totalItems})</h2>
        {!totalItems ? (
          <div className="flex flex-col justify-center items-center">
            <img
              width={200}
              height={200}
              src="/public/images/illustration-empty-cart.svg"
              alt="Empty Cart"
            />
            <p>Aici iti apare mancare fomistule/fomisto</p>
          </div>
        ) : (
          <>
            {cart.map((cartItem, i) => {
              const { name, quantity, price } = cartItem;

              return (
                <div key={i}>
                  <div className="flex justify-between items-center border-b border-rust/30 py-4">
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-2">
                        <p className="text-rust font-semibold">{quantity}x</p>
                        <p>{name}</p>
                      </div>

                      <span className="text-rust opacity-60">
                        {price} RON buc
                      </span>
                    </div>
                    <div className="flex gap-2 flex-col">
                      <div className="flex items-center gap-4">
                        <button
                          className="button-circle"
                          onClick={() => onDec(cartItem)}>
                          -
                        </button>
                        <span className="font-semibold">{quantity}</span>
                        <button
                          className="button-circle"
                          onClick={() => onInc(cartItem)}>
                          +
                        </button>
                      </div>
                      <button
                        className="opacity-55 text-right"
                        onClick={() => onDel(cartItem)}>
                        Șterje
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="py-10">
              <p className="flex justify-between items-center">
                Total:{" "}
                <span className="text-3xl font-semibold text-rust">
                  {totalPrice} RON
                </span>
              </p>
            </div>

            <button
              onClick={handleModal}
              className="btn border border-rust bg-rust w-full font-normal
				hover:bg-egg text-white hover:text-rust ">
              Rupe portofelu'
            </button>

            {modal && (
              <Modal
                cartItems={cart}
                totalPrice={totalPrice}
                onClose={handleCloseModal}
                onReset={onReset}
              />
            )}
          </>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
