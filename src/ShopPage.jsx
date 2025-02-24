import ItemsView from "./ItemsView"
import { Link } from "react-router-dom";
import Page from "./Page"
import styles from './ShopPage.module.css'
import bagsData from '../items.json'; // Adjust path based on where the JSON is located

function ShopPage() {
    const itemsArray = (bagsData.bags);
      
    return (
        <Page>
            <div className={styles.box}>
                <ul className={styles.list}>
                    {itemsArray.map(item => (<li  key={item.id}><Link to={`/shop/${item.id}`}>{item.name}</Link></li>))}
                </ul>
            </div>
            <ItemsView />

        </Page>
    )
  }
  
  export default ShopPage
  