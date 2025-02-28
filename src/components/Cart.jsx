import React, { useState } from "react";
import styles from './Cart.module.css'
import Page from "../pages/Page.jsx";
import { useCart } from "../context/CartContext.jsx";

const Cart = () => {
  const { cartItems,getItemQuantity,increaseQuantity,decreaseQuantity } = useCart();
  

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
  const handleChangeQuantity = (event, quantity, id) => {
    const newQuantity = parseInt(event.target.value, 10);
    
    // Check if the value has increased
    if (newQuantity > quantity) {
      increaseQuantity(id)
    } else if(newQuantity < quantity) {
      decreaseQuantity(id)
    } else {
      decreaseQuantity(id)
    }
   
  }
  return (
    <Page>
    <div className={styles.cart}>
      <h2>העגלה שלך</h2>
      <div id="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className={styles.cartitem}>
            <div className={styles.cartitemImageContainer}>
    <img src={item.img} alt={item.name} className={styles.cartitemImage} />
  </div>
            <div>
              <div className={styles.cartitemname}>{item.name}</div>
              <div className={styles.cartitemprice}>${item.price}</div>
            </div>
            <div>
              <input
                type="number"
                value={item.quantity}
                min="0"
                className={styles.cartitemquantity}
                onChange={(e) => handleChangeQuantity(e, item.quantity, item.id)}
              />
            </div>
          </div>
        ))}
      </div>

      <div className={styles.carttotal}>
        Total: ${getTotalPrice().toFixed(2)}
      </div>

      <button className={styles.checkoutbtn} onClick={handleCheckout}>
        המשך לתשלום
      </button>
    </div>
    </Page>
  );
};

export default Cart;
