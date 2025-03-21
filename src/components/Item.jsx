import styles from './Item.module.css'
import TruncatedText from '../helpers/TruncatedText'
function Item({id, title, price, img, details,handler }) {
    const delayChange = () => {
        handler()
        window.location.href = `/shop/item/${id}`;
        // setTimeout(() => {
        //     window.location.href = `/shop/${id}`;
        // }, 250)
    }
    return (
    <div className={styles.item} onClick={delayChange} >
        <div className={styles.img}><img className={styles.image} src={img}  /></div>
        <div className={styles.details}>
        <h2>{title}</h2>
        {/* <TruncatedText text={details} maxLength={100} /> */}

        <p className={styles.price}>{price} ₪ </p>
        </div>
    </div>

    )
  }
  
  export default Item
  