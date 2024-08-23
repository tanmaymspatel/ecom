import React, { useState } from "react";
import FormatPrice from "../Helpers/FormatPrice";
import CartAmountToggle from "./CartAmountToggle";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";

const CartItem = ({ id, name, image, color, price, amount }) => {
  const { removeItem, setDecrease, setIncrement } = useCartContext();

  // const setDecrease = () => {
  //   amount > 1 ? setAmounts(amount - 1) : setAmounts(1);
  // };

  // const setIncrease = () => {
  //   amount < stock ? setAmounts(amount + 1) : setAmounts(stock);
  // };

  return (
    <div className="cart_heading grid grid-cols-[20%_1fr_1fr_1fr_1fr] gap-4 items-center my-10">
      <div className="flex items-center gap-8 justify-self-center">
        <div>
          <figure className="w-28 lg:w-40 h-auto">
            <img src={image} alt={id} className="object-cover" />
          </figure>
        </div>
        <div className="flex flex-col gap-2 ">
          <p className="text-3xl">{name}</p>
          <div className="color-div flex items-center justify-start gap-3">
            <p className="text-3xl">color:</p>
            <div
              className="color-style w-6 h-6 rounded-full"
              style={{ backgroundColor: color, color: color }}
            ></div>
          </div>
        </div>
      </div>
      {/* price   */}

      <p className="cart-hide hidden md:block text-3xl justify-self-center">
        <FormatPrice price={price} />
      </p>

      {/* Quantity  */}
      <CartAmountToggle
        amount={amount}
        setDecrease={() => setDecrease(id)}
        setIncrease={() => setIncrement(id)}
      />

      {/* //Subtotal */}
      <p className="cart-hide hidden md:block text-3xl justify-self-center">
        <FormatPrice price={price * amount} />
      </p>

      <div className="justify-self-center">
        <FaTrash
          className="remove_icon cursor-pointer text-3xl text-red-600"
          onClick={() => removeItem(id)}
        />
      </div>
    </div>
  );
};

export default CartItem;
