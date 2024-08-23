import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
  return (
    <div className="cart-button">
      <div className="amount-toggle flex items-center just gap-8 text-3xl">
        <button onClick={() => setDecrease()}>
          <FaMinus />
        </button>
        <div className="amount-style text-4xl text-indigo-500 font-bold">
          {amount}
        </div>
        <button onClick={() => setIncrease()}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default CartAmountToggle;
