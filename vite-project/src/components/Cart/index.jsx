import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import OpenModalButton from "../OpenModalButton"
import { getCartItems, updateCartItemAmount, removeFromCart, placeOrderThunk} from "../../store/cart";
import "./Cart.css";


function calculateTotalPrice(items) {
  const totalPrice = items.reduce(
    (total, item) => total + (item.price || 0) * (item.amount || 1),
    0
  );
  return parseFloat(totalPrice.toFixed(2));
}

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [note, setNote] = useState("")
  const user = useSelector(state => state.session.user)
  const taxRate = 0.082;
  const convenienceFee = 0;
  const cartItems = useSelector((state) => state.cartReducer);
  const cartItemArr = Object.values(cartItems)
  const currentTime = new Date()
  const hours = currentTime.getHours()
  const minutes = currentTime.getMinutes()

  const storeOpenHours = {
    weekday: 7,
    minutes: 30,
    weekend: 9
  }

  const storeClosingHours = {
    weekday: 20,
    weekend: 13
  }


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

  function generateOrderNumber() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const length = 6; // You can adjust the length of the order number
    let orderNumber = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      orderNumber += characters[randomIndex];
    }

    return orderNumber;
  }

  const orderNumber = generateOrderNumber()

  const handlePlaceOrder = async () => {
    let orderMessage = `Order Number: ${orderNumber}\n\n`;
    orderMessage += `${user.first_name} ${user.last_name}\nphone: ${user.phone_number}\n`;
    

    cartItemArr.forEach((item) => {
      orderMessage += `${item.amount} - ${item.name}`;
      if (item.addons && item.addons.length > 0) {
        const addons = item.addons.map((addon) => addon['name']).join('\n');
        orderMessage += `\nAddOn: ${addons}`;
      }
      orderMessage += '\n\n';
    });

    if (note) {
      orderMessage += `Note: ${note}\n\n`
    }

    orderMessage += `Total: $${total.toFixed(2)}\n`;

    // Dispatch the placeOrderThunk action with the order information
    await dispatch(placeOrderThunk(orderMessage, user));

  };



  const OrderConfirmation = ({ orderNumber }) => {

    return (
      <div className="p-5 text-xl">
        <div className="text-2xl text-sky-500">Thank you for your order!</div>
        <div>Order Number: {orderNumber}</div>
        <div>Pick Up: ASAP</div>
        <div className="text-theme-green">Pick Up</div>
      </div>
    );
  };

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
                    handleAmountChange(product, parseFloat(e.target.value));
                  }}
                  value={product.amount}
                />
                <div className="product-incart-name">{product.name}</div>
                <div className="product-incart-price">${product.price}</div>
                <div className="product-incart-price">{`$${parseFloat(
                  product.price * product.amount
                ).toFixed(2)}`}</div>
                <button
                  onClick={() => {
                    handleRemoveProduct(product);
                  }}
                  className="remove-product-btn"
                >
                  <i className="fa-regular fa-trash-can"></i>
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
        <div className="flex flex-col self-end p-5 py-5 mx-10 my-10 text-lg border-2 ">
          <div className="flex total-incart justify-between gap-5">
            <p className="">Subtotal:</p>
            <p className=" total-incart-value">{`$${subtotal.toFixed(2)}`}</p>
          </div>
          <div className="flex total-incart justify-between">
            <p className="">Tax:</p>
            <p className="total-incart-value">{`$${tax.toFixed(2)}`}</p>
          </div>
          {/* <div className="flex total-incart justify-between">
            <p className="">Convenience Fee:</p>
            <div className="total-incart-value">{`$${convenienceFee.toFixed(
              2
            )}`}</div>
          </div> */}
          <div className="flex  text-xl text-green-700 font-bold justify-between">
            <div className="flex total-incart">Total:</div>
            <div className="flex total-incart-value">{`$${total.toFixed(2)}`}</div>
          </div>
        </div>
        <div className="flex flex-col item-center w-11/12">
          <label
            className="block mb-2 text-xl font-medium text-gray-900"
            htmlFor="instructions"
          >
            Special Instructions
          </label>
          <textarea
            rows="4"
            name="instructions"
            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          ></textarea>
        </div>
        <div>Any price may variate for any special modification</div>
        <div className="w-full flex p-3 gap-1">
          <button
            className="flex-1 green-btn"
            onClick={() => navigate("/menu")}
          >
            Continue Shopping
          </button>
          {productsInCartList.length ? (
            // Check if the store is open, and if it is, enable the button
            ((currentTime.getDay() >= 1 && currentTime.getDay() <= 6 && 
              hours >= storeOpenHours.weekday && hours < storeClosingHours.weekday) ||
            (currentTime.getDay() === 0 || currentTime.getDay() === 6 && 
              hours >= storeOpenHours.weekend && hours < storeClosingHours.weekend)) ? (
                <OpenModalButton
                  modalComponent={<OrderConfirmation orderNumber={orderNumber} />}
                  buttonText="Place Order"
                  onButtonClick={handlePlaceOrder}
                  onModalClose={() => navigate("/menu")}
                  className="flex-1 green-btn your-cart-btn"
                />
              ) : (
                <button
                  disabled
                  className="flex-1 your-cart-btn"
                  style={{ background: "gray", cursor: "not-allowed" }}
                >
                  Store is currently closed
                </button>
              )
          ) : (
            <button
              disabled
              className="flex-1 your-cart-btn"
              style={{ background: "gray", cursor: "not-allowed" }}
            >
              Place Order
            </button>
          )}

        </div>
      </div>
    </div>
  );
};

export default Cart;
