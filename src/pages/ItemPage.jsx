import Page from "./Page.jsx";
import styles from './ItemPage.module.css';
import { useParams } from "react-router-dom";
import ImageZoomPopup from "../components/ImageZoomPopup.jsx";
import bagsData from '../../items.json';
import { useState } from "react";
import { useCart } from "../context/CartContext.jsx";
import createOrder from "../helpers/createOrder.js";
import { Toaster, toast } from "react-hot-toast";


function ItemPage() {
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomedImageSrc, setZoomedImageSrc] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
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

    const handleColorChange = (event) => {
      setSelectedColor(event.target.value);
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
            <select id="type" name="color" value={selectedColor} onChange={handleColorChange}>
              {product.colors.map((color) => (<option key={color} value={color}>{color}</option>))}
  
</select>
            </div>
          <div className={styles.control}>
          
            <h2 className={styles.price}>{product.price} ₪</h2>
                <button onClick={() => handleAddToCart()}>הוסף לעגלה</button>
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
  