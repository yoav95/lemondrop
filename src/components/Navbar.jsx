import styles from "./Navbar.module.css";
// import Link from "./Link";
import { NavLink, Link, useLocation  } from "react-router-dom";
import { ReactComponent as ReactLogo } from '../assets/logo.svg'
import { useCart } from "../context/CartContext.jsx";
import Wrapper from "../components/Wrapper";
import { FaInstagram  } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useEffect, useState } from "react";
import SoundPlayer from '../helpers/SoundPlayer'; // Import your sound player component
import { Spin as Hamburger } from 'hamburger-react'
import CustomLink from "./CustomLink.jsx";
import { useLanguage } from "../context/LanguageContext.jsx";

function Navbar() {
  const [isBlinking, setIsBlinking] = useState(false);
  const [playSound, setPlaySound] = useState(false);
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation();
  const { language, toggleLanguage } = useLanguage();
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
    }, 6000); // Repeat every 6 seconds

    return () => clearInterval(interval);
  }, []); 
  console.log(language)
    return (
      <>
      
        
        <header className={location.pathname === "/" ? `${styles.header} ${styles.transparent}`   : styles.header}>
          
        <Wrapper>
          
        <div className={styles.nv} >
        {/* <div className={styles.lang} onClick={toggleLanguage}>EN/HE</div> */}
          <div  className={`${styles.logo}`}>< Link to="/"><ReactLogo className={isBlinking ? `${styles.svg} ${styles.popping}` : styles.svg} id="svg"/></Link></div>
          <div className={styles.box}>
          <div className={styles.cartbox} onClick={triggerSound} ><NavLink to="/cart"><div className={styles.cart}><MdOutlineShoppingCart size={40} className={styles.carticon} /><p>{totalItems}</p></div></NavLink></div>
          <ul className={isOpen ? `${styles.ul} ${styles.show}` : styles.ul} onClick={toggleMenu} >
          
          
          <li><a onClick={triggerSound}  href="https://www.instagram.com/madebylemondrop/" target="_blank" ><div className={styles.icon}><FaInstagram size={'20px'}/></div></a></li>
          <li onClick={triggerSound} className={`${styles.li}`}><CustomLink text="יצירת קשר" link="/contact"/></li>
              <li onClick={triggerSound} className={`${styles.li}`}><CustomLink text="התאמה אישית" link="/custom"/></li>
              <li onClick={triggerSound} className={`${styles.li}`}><CustomLink text="מידע" link="/info"/></li>
              <li onClick={triggerSound} className={`${styles.li}`}><CustomLink text="חנות" link="/shop"/></li>
              
              
              
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
  