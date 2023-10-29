import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { totalSum } from '../util';
import { testCart } from './testCart';

import './Cart.css'


const Cart = () => {
    const [amount, setAmount] = useState(0)
    const [total, setTotal] = useState(0);

    const productsInCartList = Object.values(testCart)


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
                            <div className='product-incart-price'>{`$${product.price.slice(1) * product.amount}`}</div>
                            <div onClick={() => { /* This is where the delete product from cart goes */ }}>
                                X
                            </div>
                        </div>
                    )
                })}
                <div className='total-incart-container'>
                    <div className='total-incart'>Cart Total</div>
                    <div className='total-incart-value'>{`$${totalSum(productsInCartList)}`}</div>
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
