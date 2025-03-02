import styles from "./Navbar.module.css";
// import Link from "./Link";
import { NavLink, Link, useLocation  } from "react-router-dom";
import { ReactComponent as ReactLogo } from '../assets/logo.svg'
import { useCart } from "../context/CartContext.jsx";
import Wrapper from "../helpers/Wrapper";
import { FaInstagram  } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useEffect, useState } from "react";
import SoundPlayer from '../helpers/SoundPlayer'; // Import your sound player component
import { Spin as Hamburger } from 'hamburger-react'


function Navbar() {
  const [isBlinking, setIsBlinking] = useState(false);
  const [playSound, setPlaySound] = useState(false);
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation();
    const { cartItems } = useCart();
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  
  const triggerSound = () => {
    setPlaySound(true); // Trigger the sound play
    setTimeout(() => setPlaySound(false), 1000); // Stop the sound after 1 second
  };
  const startBlinking = () => {

    setIsBlinking(true);
  };

  // Function to stop blinking
  const stopBlinking = () => {

    setIsBlinking(false);
  };
  const toggleMenu  = () => {
    setIsOpen((prev) => !prev)

  }

  useEffect(() => {

    const interval = setInterval(() => {
      
      startBlinking();
      setTimeout(stopBlinking, 2500); 
    }, 5000); // Repeat every 5 seconds

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array to run only once on mount
  
    return (
      <>
      
        
        <header className={location.pathname === "/" ? `${styles.header} ${styles.transparent}`   : styles.header}>
          
        <Wrapper>
        <div className={styles.nv} >
          <div  className={`${styles.logo}`}>< Link to="/"><ReactLogo className={isBlinking ? `${styles.svg} ${styles.popping}` : styles.svg} id="svg"/></Link></div>
          <div className={styles.box}>
          <div className={styles.cartbox} onClick={triggerSound} ><NavLink to="/cart"><div className={styles.cart}><MdOutlineShoppingCart size={40} /><p>{totalItems}</p></div></NavLink></div>
          <ul className={isOpen ? `${styles.ul} ${styles.show}` : styles.ul} onClick={toggleMenu} >
          
          <li><a onClick={triggerSound}  href="https://www.instagram.com/madebylemondrop/" target="_blank" ><div className={styles.icon}><FaInstagram size={'20px'}/></div></a></li>
              <li onClick={triggerSound} className={`${styles.li}`}><NavLink className={({ isActive }) =>
              isActive ? styles.active : null
            } to="/contact" color="#2A4F6B">יצירת קשר</NavLink></li>
              <li onClick={triggerSound} className={`${styles.li}`}><NavLink className={({ isActive }) =>
              isActive ? styles.active : null}  to="/custom" color="#2A4F6B">תיקים בהתאמה אישית</NavLink></li>
              <li onClick={triggerSound} className={`${styles.li}`}><NavLink  className={({ isActive }) =>
              isActive ? styles.active : null} to="/info" color="#2A4F6B">מידע</NavLink></li>
              <li onClick={triggerSound} className={`${styles.li}`}><NavLink className={({ isActive }) =>
              isActive ? styles.active : null} to="/shop" color="#2A4F6B">חנות</NavLink></li>
              
              
          </ul>
          
          <div className={styles.burger} onClick={toggleMenu}><Hamburger size={20} toggled={isOpen} onClick={() => toggleMenu()} /></div>
          </div>
          </div>
          </Wrapper>
          
      </header>
      <SoundPlayer soundFile="/sounds/drop.mp3" play={playSound} />
      
      </>
    )
  }
  
  export default Navbar
  