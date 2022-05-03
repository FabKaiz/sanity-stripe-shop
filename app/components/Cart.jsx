import React, { useRef } from 'react'
import Link from 'next/link'
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
} from 'react-icons/ai'
import { TiDeleteOutline } from 'react-icons/ti'
import toast from 'react-hot-toast'

import { useStateContext } from '../context/StateContext'
import { urlFor } from '../lib/client'

const Cart = () => {
  const cartRef = useRef()
  const { totalPrice, totalQuantities, cartItems, setShowCart } =
    useStateContext()

  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
        <button
          type="button"
          className="cart-heading"
          onClick={() => setShowCart(false)}
        >
          <AiOutlineLeft />
          <span className="heding">Your Cart</span>
          <span className="cart-num-items">({totalQuantities} items)</span>
        </button>
        {cartItems.length < 1 && (
          <div className="empty-cart">
            <AiOutlineShopping size={150} />
            <h3>Your shopping bag is empty</h3>
            <button
              type="button"
              onClick={() => setShowCart(false)}
              className="btn"
            >
              Continue shopping
            </button>
          </div>
        )}

        <div className="product-container">
          {cartItems.length >= 1 &&
            cartItems.map((cartItem, idx) => (
              <div className="product" key={cartItem._id}>
                <img
                  src={urlFor(cartItem?.image[0])}
                  alt="product"
                  className="cart-product-image"
                />
                <div className="item-desc">
                  <div className="flex top">
                    <h5>{cartItem.name}</h5>
                    <h4>${cartItem.price}</h4>
                  </div>
                  <div className="flex bottom">
                    <div>
                      <p className="quantity-desc">
                        <span className="minus">
                          <AiOutlineMinus />
                        </span>
                        <span className="num">0</span>
                        <span className="plus">
                          <AiOutlinePlus />
                        </span>
                      </p>
                    </div>
                    <button type="button" className="remove-item">
                      <TiDeleteOutline /> <p>Remove</p>
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {cartItems.length >= 1 && (
          <div className="cart-bottom">
            <div className="total">
              <h3>Subtotal:</h3>
              <h3>${totalPrice}</h3>
            </div>
            <div className="btn-container">
              <button type="button" className="btn">
                Pay with Stripe
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart
