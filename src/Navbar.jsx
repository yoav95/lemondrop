import styles from "./Navbar.module.css";
// import Link from "./Link";
import { NavLink, Link, useLocation  } from "react-router-dom";
import { ReactComponent as ReactLogo } from './assets/logop.svg'


import Wrapper from "./Wrapper";
import { FaInstagram  } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useEffect, useState } from "react";
import SoundPlayer from './SoundPlayer'; // Import your sound player component
import { TfiMenu } from "react-icons/tfi";

function Navbar() {
  const [isBlinking, setIsBlinking] = useState(false);
  const [playSound, setPlaySound] = useState(false);
  const [showMenu, setShowMenu] = useState(false)
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
  const toggleMenu  = () => {
    
    setShowMenu((prev) => !prev)

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
      <Wrapper>
        
        <header className={`${styles.header}`}>
            
          <div  className={`${styles.logo}`}>< Link to="/"><ReactLogo className={isBlinking ? `${styles.svg}` : `${styles.svg} ${styles.popping}`} id="svg"/></Link></div>
          <div className={styles.box}>
          <ul className={showMenu ? `${styles.ul} ${styles.show}` : styles.ul} onClick={toggleMenu}>
          
          <li><a onClick={triggerSound}  href="https://www.instagram.com/madebylemondrop/" target="_blank" ><div className={styles.icon}><FaInstagram size={'20px'}/></div></a></li>
              <li onClick={triggerSound} className={`${styles.li}`}><NavLink   to="/contact" color="#2A4F6B">יצירת קשר</NavLink></li>
              <li onClick={triggerSound} className={`${styles.li}`}><NavLink to="/custom" color="#2A4F6B">תיקים בהתאמה אישית</NavLink></li>
              <li onClick={triggerSound} className={`${styles.li}`}><NavLink   to="/info" color="#2A4F6B">מידע</NavLink></li>
              <li onClick={triggerSound} className={`${styles.li}`}><NavLink  to="/shop" color="#2A4F6B">חנות</NavLink></li>
              <li onClick={triggerSound} ><NavLink to="/cart"><div className={styles.cart}><MdOutlineShoppingCart size='25px' /><p>1</p></div></NavLink></li>
              
          </ul>
          <div className={styles.burger} onClick={toggleMenu}><TfiMenu size={25}/></div>
          </div>
          
          
      </header>
      <SoundPlayer soundFile="/sounds/drop.mp3" play={playSound} />
      </Wrapper>
      </>
    )
  }
  
  export default Navbar
  