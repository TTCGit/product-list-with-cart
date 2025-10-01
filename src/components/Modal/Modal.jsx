import { CheckCircle } from "lucide-react";

const Modal = ({ cartItems, totalPrice, onClose, onReset }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8  w-xl overflow-y-auto">
        <div className="flex items-start justify-between mb-8">
          <div>
            <CheckCircle className="w-10 h-10 text-green-400" />
            <h2 className="mb-1 mt-4">Confirmare comandă</h2>
            <p className="text-rust opacity-60 text-sm">
              {totalPrice < 10
                ? "Aoleo ce sărăkie de comandă sărăkie umană"
                : "Așa da, altcumva te uiți mâine pe cântar"}
            </p>
          </div>
          <button
            className="button-circle"
            onClick={onClose}>
            x
          </button>
        </div>
        <div className="flex flex-col gap-6 p-4 rounded-md bg-egg">
          {cartItems.map((item) => {
            const { image, name, quantity, price } = item;

            return (
              <div className="flex gap-4 py-4 items-center justify-between border-b border-rust">
                <div className="flex items-center gap-4">
                  <figcaption>
                    <img
                      width={70}
                      height={70}
                      src={image.desktop}
                      alt={name}
                    />
                  </figcaption>
                  <div>
                    <p className=" font-semibold mb-1">{name}</p>
                    <p className="text-sm">
                      <span className="text-rust pr-4">{quantity}x</span>
                      <span className="text-rust-dark opacity-50">
                        @{price}RON
                      </span>
                    </p>
                  </div>
                </div>
                <p>{price * quantity}RON</p>
              </div>
            );
          })}
          <div className="flex justify-between items-center py-6">
            <p className="text-rust-dark">Total iluzie fericire:</p>
            <p className="text-2xl font-bold">{totalPrice}RON</p>
          </div>
        </div>
        <div className="text-center mt-8">
          <button
            className="btn border border-rust bg-rust w-full font-normal
				hover:bg-egg text-white hover:text-rust cursor-pointer"
            onClick={onReset}>
            Hai, comandă iară
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
