import ItemsView from "../components/ItemsView.jsx"
import Page from "./Page.jsx"
import styles from './ShopPage.module.css'
import bagsData from '../../items.json'; // Adjust path based on where the JSON is located
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
function ShopPage() {
    const { type } = useParams();  // Get the "type" parameter from the URL
    const itemsArray = (bagsData.bags);
      
    return (
        <Page>
            <div className={styles.box}>
                <ul className={styles.list}>
                <li ><NavLink to={`/shop/everyday`} className={({ isActive }) =>
                              isActive ? styles.active : null}>לשימוש יומיומי</NavLink></li>
                <li ><NavLink to={`/shop/things`} className={({ isActive }) =>
                              isActive ? styles.active : null}>מחוץ לאופניים</NavLink></li>
                <li ><NavLink to={`/shop/bikepacking`} className={({ isActive }) =>
                              isActive ? styles.active : null}>לבייקפקינג</NavLink></li>
                </ul>
            </div>
            <ItemsView type={type}/>

        </Page>
    )
  }
  
  export default ShopPage
  