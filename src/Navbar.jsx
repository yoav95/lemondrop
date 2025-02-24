import styles from "./Navbar.module.css";
// import Link from "./Link";
import { NavLink, Link, useLocation  } from "react-router-dom";

import Wrapper from "./Wrapper";
import { FaInstagram  } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useEffect, useState } from "react";
import SoundPlayer from './SoundPlayer'; // Import your sound player component
function Navbar() {
  const [isBlinking, setIsBlinking] = useState(false);
  const [playSound, setPlaySound] = useState(false);
  const location = useLocation();
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

  useEffect(() => {
    // Set interval to start blinking every 5 seconds
    const interval = setInterval(() => {
      startBlinking();
      setTimeout(stopBlinking, 2500); // Stop after 1.5 seconds
    }, 10000); // Repeat every 5 seconds

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array to run only once on mount
  
    return (
      <>
      <Wrapper>
        <header className={`${styles.header} ${isBlinking ? styles.blinking : ''}`}>
            
          <div  className={`${styles.logo} ${isBlinking ? styles.popping : ''}`}>< Link to="/"><img onClick={triggerSound} src="/logo.svg" /></Link></div>
          <ul className={styles.ul}>
          
          <li><a onClick={triggerSound}  href="https://www.instagram.com/madebylemondrop/" target="_blank" ><div className={styles.icon}><FaInstagram size={'20px'}/></div></a></li>
              <li onClick={triggerSound} className={`${styles.li} ${location.pathname === "/contact" ? styles.active : ""}`}><NavLink   to="/contact" color="#2A4F6B">יצירת קשר</NavLink></li>
              <li onClick={triggerSound} className={`${styles.li} ${location.pathname === "/custom" ? styles.active : ""}`}><NavLink to="/custom" color="#2A4F6B">תיקים בהתאמה אישית</NavLink></li>
              <li onClick={triggerSound} className={`${styles.li} ${location.pathname === "/about" ? styles.active : ""}`}><NavLink   to="/about" color="#2A4F6B">מידע</NavLink></li>
              <li onClick={triggerSound} className={`${styles.li} ${location.pathname === "/shop" ? styles.active : ""}`}><NavLink  to="/shop" color="#2A4F6B">חנות</NavLink></li>
              <li onClick={triggerSound} ><NavLink to="/cart"><div className={styles.cart}><MdOutlineShoppingCart size='25px' /><p>1</p></div></NavLink></li>
              
          </ul>
          
      </header>
      <SoundPlayer soundFile="/sounds/drop.mp3" play={playSound} />
      </Wrapper>
      </>
    )
  }
  
  export default Navbar
  