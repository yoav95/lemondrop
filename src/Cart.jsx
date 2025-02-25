import React, { useState } from "react";
import styles from './Cart.module.css'
import Page from "./Page";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Lemon Bag", price: 50, quantity: 1 },
    { id: 2, name: "Orange Backpack", price: 70, quantity: 2 },
  ]);

  // Update quantity of an item
  const updateQuantity = (id, quantity) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: parseInt(quantity) } : item
    );
    setCartItems(updatedCartItems);
  };

  // Calculate total price
  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleCheckout = () => {
    alert("Proceeding to checkout!");
  };

  return (
    <Page>
    <div className={styles.cart}>
      <h2>Your Cart</h2>
      <div id="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className={styles.cartitem}>
            <div>
              <div className={styles.cartitemname}>{item.name}</div>
              <div className="cartitemprice">${item.price}</div>
            </div>
            <div>
              <input
                type="number"
                value={item.quantity}
                min="1"
                className={styles.cartitemquantity}
                onChange={(e) => updateQuantity(item.id, e.target.value)}
              />
            </div>
          </div>
        ))}
      </div>

      <div className={styles.carttotal}>
        Total: ${getTotalPrice().toFixed(2)}
      </div>

      <button className={styles.checkoutbtn} onClick={handleCheckout}>
        Proceed to Checkout
      </button>
    </div>
    </Page>
  );
};

export default Cart;
