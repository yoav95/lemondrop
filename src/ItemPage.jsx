import Page from "./Page";
import styles from './ItemPage.module.css';
import { useParams } from "react-router-dom";
import ImageZoomPopup from "./ImageZoomPopup.jsx";
import bagsData from '../items.json';
import { useState } from "react";
function ItemPage() {
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomedImageSrc, setZoomedImageSrc] = useState('');
    const {id} = useParams();


    const handleImageClick = (largeImageSrc) => {
      setZoomedImageSrc(largeImageSrc);
      setIsZoomed(true); // Show the popup
    };
    const itemsArray = bagsData.bags;
    const product = itemsArray.find(item => item.id === parseInt(id))
    
    return (
        <Page>
            <div className={styles.box}>
            <div className={styles.text}>
            
            <h1>{product.name}</h1>
            <p>{product.details}</p>
            <div className={styles.color}>
              <label>בחירת צבע</label>
            <select id="type" name="color">
              {product.colors.map((color) => (<option key={color} value={color}>{color}</option>))}
  
</select>
            </div>
{/* <div className={styles.custom}>
                <h2>התאמה אישית</h2>
                <h3>סוג בד</h3>
                <select id="type" name="type">
  <option value="type1">קורדורה</option>
  <option value="type2">ריפסטופ ניילון</option>
  <option value="type3">XPAC</option>
</select>
<h3>סוג רוכסן</h3>
                <select id="type" name="type">
  <option value="type1">דוחה מים YKK</option>
  <option value="type2">עמיד מים YKK</option>
  <option value="type3">רוכסן רגיל YKK</option>
</select>
            </div> */}
          <div className={styles.control}>
          
            <input type="number" id="amount" name="amount" min="1" step="1" value="1" />
            <h2 className={styles.price}>{product.price}</h2>
                <button>הוסף לעגלה</button>
            </div>
            
            </div>
            <div className={styles.images}>
              {product.images.map((img) => (
                <img key={`${product.id}-img`} onClick={() => handleImageClick(img)} src={img}/>
              ))}

            </div>
            {isZoomed && (
        <ImageZoomPopup
          imageSrc={zoomedImageSrc}
          closePopup={() => setIsZoomed(false)} // Close the popup
        />
      )}
            </div>

        </Page>
    )
  }
  
  export default ItemPage
  