import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
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

const Cart = () => {
  const cartItems = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  const handleAmountChange = (product, newAmount) => {
    product.amount = newAmount;
    if (product.amount >= 1) dispatch(updateCartItemAmount(product));
    // dispatch(updateCartItemAmount(product));
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
    };
  });

  useEffect(() => {
    getCartItems();
  }, []);

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
            <div className="cart-list" key={`${product.name}-${i}`}>
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
          );
        })}
        <div className="total-incart-container">
          <div className="total-incart">Cart Total</div>
          <div className="total-incart-value">{`$${calculateTotalPrice(
            productsInCartList
          )}`}</div>
        </div>
        <div>Any price may variate for any special modification</div>
        <div className="">
          <button className="green-btn your-cart-btn" type="submit">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
