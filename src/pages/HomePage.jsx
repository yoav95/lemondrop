import Page from './Page'
import styles from './HomePage.module.css'
import { Link } from 'react-router-dom'
const HomePage = () => {
  return (
    <Page>


    <div className={styles.menu}>
      
    <div  className={styles.menuItem}>
    <Link to="/shop/everyday">
    <div className={styles.color1}></div>
          <img  src="./images/items/seat.JPG"  className={styles.image} />
          <div className={styles.text}>לשימוש יומיומי</div>
          </Link>
     </div>
     
     
     <div  className={styles.menuItem}>
     <Link to="/shop/bikepacking">
     <div className={styles.color1}></div>
          <img  src="./images/items/framefull3.jpg"  className={styles.image} />
          <div className={styles.text}>בייקפקינג</div>
          </Link>
     </div>
     
     
     <div  className={styles.menuItem}>
     <Link to="/shop/things">
     <div className={styles.color1}></div>
          <img src="./images/items/run3.JPG"  className={styles.image} />
          <div className={styles.text}>מחוץ לאופניים</div>
          </Link>
     </div>
     
    </div>
    <div>
      <h2>על למון דרופ</h2>
    </div>

        
    </Page>
    
    
  )
}

export default HomePage