import styled from "styled-components";
import { useCartContext } from "./context/cart_context";
import CartItem from "./components/CartItem";
import { NavLink } from "react-router-dom";
import { Button } from "./styles/Button";
import FormatPrice from "./Helpers/FormatPrice";

const Cart = () => {
  const { cart, clearCart, total_price, shipping_fee } = useCartContext();
  // console.log("🚀 ~ file: Cart.js ~ line 6 ~ Cart ~ cart", cart);

  if (cart?.length === 0) {
    return (
      <div className="flex items-center justify-center">
        <h3 className="text-5xl capitalize">No Cart in Item </h3>
      </div>
    );
  }

  return (
    <section className="section">
      <div className="container">
        <div className="cart_heading text-center grid grid-cols-[20%_1fr_1fr_1fr_1fr]">
          <p className="text-4xl ">Item</p>
          <p className="cart-hide hidden md:block text-4xl ">Price</p>
          <p className="text-4xl ">Quantity</p>
          <p className="cart-hide hidden md:block text-4xl ">Subtotal</p>
          <p className="text-4xl ">Remove</p>
        </div>
        <div className="border-2 my-10" />
        <div className="cart-item ">
          {cart?.map((curElem) => {
            return <CartItem key={curElem.id} {...curElem} />;
          })}
        </div>
        <div className="border-2 my-16" />
        <div className="cart-two-button flex justify-between gap-8 mt-8">
          <NavLink to="/products">
            <Button btnName="continue shopping"></Button>
          </NavLink>
          <Button
            btnName="clear cart"
            onClick={clearCart}
            clr="bg-red-600"
          ></Button>
        </div>

        {/* order total_amount */}
        <div className="order-total--amount py-14 flex justify-end">
          <div className="order-total--subdata w-[35rem] bg-gray-100 p-16 flex flex-col items-start gap-12">
            <div className="flex items-center justify-between w-full">
              <p className="text-4xl">subtotal:</p>
              <p className="text-4xl font-bold">
                <FormatPrice price={total_price} />
              </p>
            </div>
            <div className="flex items-center justify-between w-full">
              <p className="text-4xl">shipping fee:</p>
              <p className="text-4xl font-bold">
                <FormatPrice price={shipping_fee} />
              </p>
            </div>
            <div className="border-2 my-2 w-full" />
            <div className="flex items-center justify-between w-full">
              <p className="text-4xl">order total:</p>
              <p className="text-4xl font-bold">
                <FormatPrice price={shipping_fee + total_price} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const EmptyDiv = styled.div`
  display: grid;
  place-items: center;
  height: 50vh;

  h3 {
    font-size: 4.2rem;
    text-transform: capitalize;
    font-weight: 300;
  }
`;

const Wrapper = styled.section`
  padding: 9rem 0;

  .grid-four-column {
    grid-template-columns: repeat(4, 1fr);
  }

  .grid-five-column {
    grid-template-columns: repeat(4, 1fr) 0.3fr;
    text-align: center;
    align-items: center;
  }
  .cart-heading {
    text-align: center;
    text-transform: uppercase;
  }
  hr {
    margin-top: 1rem;
  }
  .cart-item {
    padding: 3.2rem 0;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }

  .cart-user--profile {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1.2rem;
    margin-bottom: 5.4rem;

    img {
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
    }
    h2 {
      font-size: 2.4rem;
    }
  }
  .cart-user--name {
    text-transform: capitalize;
  }
  .cart-image--name {
    /* background-color: red; */
    align-items: center;
    display: grid;
    gap: 1rem;
    grid-template-columns: 0.4fr 1fr;
    text-transform: capitalize;
    text-align: left;
    img {
      max-width: 5rem;
      height: 5rem;
      object-fit: contain;
      color: transparent;
    }

    .color-div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1rem;

      .color-style {
        width: 1.4rem;
        height: 1.4rem;

        border-radius: 50%;
      }
    }
  }

  .cart-two-button {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;

    .btn-clear {
      background-color: #e74c3c;
    }
  }

  .amount-toggle {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.4rem;
    font-size: 1.4rem;

    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }

  .remove_icon {
    font-size: 1.6rem;
    color: #e74c3c;
    cursor: pointer;
  }

  .order-total--amount {
    width: 100%;
    margin: 4.8rem 0;
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;

    .order-total--subdata {
      border: 0.1rem solid #f0f0f0;
      display: flex;
      flex-direction: column;
      gap: 1.8rem;
      padding: 3.2rem;
    }
    div {
      display: flex;
      gap: 3.2rem;
      justify-content: space-between;
    }

    div:last-child {
      background-color: #fafafa;
    }

    div p:last-child {
      font-weight: bold;
      color: ${({ theme }) => theme.colors.heading};
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-five-column {
      grid-template-columns: 1.5fr 1fr 0.5fr;
    }
    .cart-hide {
      display: none;
    }

    .cart-two-button {
      margin-top: 2rem;
      display: flex;
      justify-content: space-between;
      gap: 2.2rem;
    }

    .order-total--amount {
      width: 100%;
      text-transform: capitalize;
      justify-content: flex-start;
      align-items: flex-start;

      .order-total--subdata {
        width: 100%;
        border: 0.1rem solid #f0f0f0;
        display: flex;
        flex-direction: column;
        gap: 1.8rem;
        padding: 3.2rem;
      }
    }
  }
`;

export default Cart;
