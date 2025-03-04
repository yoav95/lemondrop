import Page from './Page'
import styles from './HomePage.module.css'
import { Link } from 'react-router-dom'
const HomePage = () => {
  return (
    <Page>


    <div className={styles.bg}>
    <div className={styles.menu}>
      
      <div  className={styles.menuItem}>
      <Link to="/shop/everyday">
      <div className={styles.color1}></div>
            <img  src="./images/everyday.jpg"  className={styles.image} />
            <div className={styles.text}>לשימוש יומיומי</div>
            </Link>
       </div>
       
       
       <div  className={styles.menuItem}>
       <Link to="/shop/bikepacking">
       <div className={styles.color1}></div>
            <img  src="./images/image.jpg"  className={styles.image} />
            <div className={styles.text}>בייקפקינג</div>
            </Link>
       </div>
       
       
       <div  className={styles.menuItem}>
       <Link to="/shop/things">
       <div className={styles.color1}></div>
            <img src="./images/offbike.jpg"  className={styles.image} />
            <div className={styles.text}>מחוץ לאופניים</div>
            </Link>
       </div>
       
      </div>
    </div>
    

        
    </Page>
    
    
  )
}

export default HomePage