import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getCartItems } from '../../store/cart';
import './Cart.css'

function calculateTotalPrice(items) {
    return items.reduce((total, item) => total + (item.price || 0) * (item.amount || 1), 0);
  }
  
const Cart = () => {
    const [amount, setAmount] = useState(0);
    const [total, setTotal] = useState(0);
    const cartItems = useSelector(state => state.cartReducer)

    // const productsInCartList = Object.values(testCart)

    const productsInCartList = Object.values(cartItems).map(item => {
        return  {
            name: item.name,
            price: item.price,
            image: item.image,
            amount: item.amount
        }
    })
    

    // console.log("prd", productsInCartList)
    console.log(Object.values(cartItems).map(item => {
        return  {
            name: item.name,
            price: item.price,
            image: item.image,
            amount: item.amount
        }
    }))

    useEffect(() => {
        getCartItems()
    },[])


    return (
        <div className="your-cart-container">
            <div className='headers bg-titles-yellow'>YOUR CART</div>
            <div className="cart-container">
                <div className='incart-titles'>
                    <div className='incart-title-amount'>#</div>
                    <div className='incart-title-name'>Name</div>
                    <div className='incart-title-price'>Price Unit</div>
                    <div className='incart-title-price'>Price Total</div>

                </div>
                {productsInCartList.map((product, i) => {
                    return (
                        <div className='cart-list' key={`${product.name}-${i}`}>
                            <input
                                className='product-incart-amount'
                                onChange={e => setAmount(e.target.value)}
                                value={product.amount}
                            />
                            <div className='product-incart-name'>{product.name}</div>
                            <div className='product-incart-price'>{product.price}</div>
                            <div className='product-incart-price'>{`$${+product.price * +product.amount}`}</div>
                            <div onClick={() => { /* This is where the delete product from cart goes */ }}>
                                X
                            </div>
                        </div>
                    )
                })}
                <div className='total-incart-container'>
                    <div className='total-incart'>Cart Total</div>
                    <div className='total-incart-value'>{`$${calculateTotalPrice(productsInCartList)}`}</div>
                </div>
                <div>Any price may variate for any special modification</div>
                <div className="">
                    <button className="green-btn your-cart-btn" type="submit">Place Order</button>
                </div>
            </div>
        </div >
    )
}


export default Cart
