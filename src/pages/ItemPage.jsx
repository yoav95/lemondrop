import Page from "./Page.jsx";
import styles from './ItemPage.module.css';
import { useParams } from "react-router-dom";
import ImageZoomPopup from "../components/ImageZoomPopup.jsx";
import bagsData from '../../items.json';
import { useState } from "react";
import { useCart } from "../context/CartContext.jsx";
import createOrder from "../helpers/createOrder.js";
import { Toaster, toast } from "react-hot-toast";
import Button from '../components/Button.jsx';


function ItemPage() {
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomedImageSrc, setZoomedImageSrc] = useState('');
    const {id} = useParams();
    const { addToCart } = useCart();


    const handleImageClick = (largeImageSrc) => {
      setZoomedImageSrc(largeImageSrc);
      setIsZoomed(true); // Show the popup
    };
    const handleAddToCart = () => {
      const order = createOrder({...product, color:selectedColor})
      addToCart(order)
      toast.success("הפריט נוסף לעגלה!");
    }
    const itemsArray = bagsData.bags;
    const product = itemsArray.find(item => item.id === parseInt(id))
    
    return (
        <Page>
            <div className={styles.box}>
              
            <div className={styles.text}>
            
            <h1>{product.name}</h1>
            <p>{product.details}</p>
            <section className={styles.selection}>
            <h2>התאמה אישית</h2>
            
            <label htmlFor="zipper">סוג רוכסן</label>
            <select id="zipper">
                <option value="metal">ykk רגיל</option>
                <option value="nylon">ykk דוחה מים</option>
                <option value="plastic">ykk עמיד</option>
            </select>
            
            
            <label htmlFor="fabric">סוג בד עיקרי</label>
            <select id="fabric">
                <option value="cordura">קורדורה</option>
                <option value="xpac">XPac</option>
                <option value="oxford600d">אוקספורד 600</option>
                <option value="oxford900d">אוקספורד 900</option>
            </select>
            <label htmlFor="colorDescription">העדפת צבע וסיגנון</label>
            <textarea
                id="colorDescription"
                className={styles.colordescription}
                placeholder="תאר\י בכמה מילים את תיק החלומות שלך"
            />
            
            
            <label htmlFor="size">גודל:</label>
            <select id="size">
                <option value="s">S</option>
                <option value="m">M</option>
                <option value="l">L</option>
            </select>
        </section>
          <div className={styles.control}>
          
            <h2 className={styles.price}>{product.price} ₪</h2>
            <Button text="הוסף לעגלה" handleClick={() => handleAddToCart()}/>
                
            </div>
            
            </div>
            <div className={styles.images}>
              {product.images.map((img) => (
                <img key={`${product.name} ${product.id}`} onClick={() => handleImageClick(img)} src={img}/>
              ))}

            </div>
            {isZoomed && (
        <ImageZoomPopup
          imageSrc={zoomedImageSrc}
          closePopup={() => setIsZoomed(false)} // Close the popup
        />
      )}
            </div>
            <Toaster />
        </Page>
    )
  }
  
  export default ItemPage
  