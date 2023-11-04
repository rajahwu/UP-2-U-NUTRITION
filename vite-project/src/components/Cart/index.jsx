import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import OpenModalButton from "../OpenModalButton"
import {
  getCartItems,
  updateCartItemAmount,
  removeFromCart,
} from "../../store/cart";
import "./Cart.css";

function calculateTotalPrice(items) {
  const totalPrice = items.reduce(
    (total, item) => total + (item.price || 0) * (item.amount || 1),
    0
  );
  return parseFloat(totalPrice.toFixed(2));
}

const placeOrder = () => {
  console.log("Order Placed")
}

const OrderConfirmation = () => {
  return (
    <div className="p-5 text-xl">
      <div className="text-2xl text-sky-500">Thank you for your order!</div>
      <div>Order Number: 123456789</div>
      <div className="text-theme-green">Pick Up</div>
    </div>
  );
};

const Cart = () => {
  const cartItems = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const taxRate = 0.082;
  const convenienceFee = 0.33;

  const handleAmountChange = (product, newAmount) => {
    product.amount = newAmount;
    if (product.amount >= 1) dispatch(updateCartItemAmount(product));
  };

  const handleRemoveProduct = (product) => {
    dispatch(removeFromCart(product));
  };

  const productsInCartList = Object.values(cartItems).map((item) => {
    return {
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      amount: item.amount || 0,
      addons: item.addons,
    };
  });

  useEffect(() => {
    getCartItems();
  }, []);

  const subtotal = calculateTotalPrice(productsInCartList);
  const tax = subtotal * taxRate;
  const total = subtotal + tax + convenienceFee;

  // console.log("productsInCartList", productsInCartList);
  return (
    <div className="your-cart-container">
      <div className="headers bg-titles-yellow">YOUR CART</div>
      <div className="cart-container">
        <div className="incart-titles">
          <div className="incart-title-amount">#</div>
          <div className="incart-title-name">Name</div>
          <div className="incart-title-price">Price Unit</div>
          <div className="incart-title-price">Price Total</div>
        </div>
        {productsInCartList.map((product, i) => {
          return (
            <div
              className="flex flex-col cart-list"
              key={`${product.name}-${i}`}
            >
              <div className="cart-list">
                <input
                  type="number"
                  className="product-incart-amount"
                  onChange={(e) => {
                    console.log("input changed: ", e.target.value);
                    handleAmountChange(product, parseFloat(e.target.value));
                  }}
                  value={product.amount}
                />
                <div className="product-incart-name">{product.name}</div>
                <div className="product-incart-price">{product.price}</div>
                <div className="product-incart-price">{`$${parseFloat(
                  product.price * product.amount
                ).toFixed(2)}`}</div>
                <button
                  onClick={() => {
                    handleRemoveProduct(product);
                  }}
                >
                  X
                </button>
              </div>
              <div className="self-start mx-14">
                {product.addons?.map((addon, i) => (
                  <p key={i}>w. {addon.name}</p>
                ))}
              </div>
            </div>
          );
        })}
        <div className="flex flex-col self-end p-4 py-10 mx-10 my-10 text-lg border-2">
          <div className="flex total-incart">
            <p className="">Subtotal:</p>
            <p className=" total-incart-value">{`$${subtotal.toFixed(2)}`}</p>
          </div>
          <div className="flex total-incart">
            <p className="">Tax:</p>
            <p className="total-incart-value">{`$${tax.toFixed(2)}`}</p>
          </div>
          <div className="flex total-incart">
            <p className="">Convenience Fee:</p>
            <div className="total-incart-value">{`$${convenienceFee.toFixed(
              2
            )}`}</div>
          </div>
          <div className="flex flex-col text-xl text-center text-green-700">
            <div className="total-incart">Total</div>
            <div className="total-incart-value">{`$${total.toFixed(2)}`}</div>
          </div>
        </div>
        <div className="flex flex-col self-start w-11/12 mx-5">
          <label
            className="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
            htmlFor="instructions"
          >
            Special Instructions
          </label>
          <textarea
            rows="4"
            name="instructions"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
        </div>
        <div>Any price may variate for any special modification</div>
        <div className="inline-flex flex-auto w-full">
          <button
            className="flex-1"
            onClick={() => {
              return navigate("/menu");
            }}
          >
            Continue Shoping
          </button>

          <OpenModalButton 
           modalComponent={<OrderConfirmation />} 
           buttonText="Place Order"
           onButtonClick={() => placeOrder()} 
           onModalClose ={() => navigate("/menu")}
           className="flex-1 green-btn your-cart-btn"
          //  id=""
          //  style=""
           />
        </div>
      </div>
    </div>
  );
};

export default Cart;
