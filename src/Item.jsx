import styles from './Item.module.css'
function Item({id, name, price, img, details,handler }) {
    const delayChange = () => {
        handler()
        setTimeout(() => {
            window.location.href = `/shop/${id}`;
        }, 250)
    }
    return (
    <div className={styles.item} onClick={delayChange} >
        <div className={styles.img}><img className={styles.image} src={img}  /></div>
        <div className={styles.details}>
        <h2>{name}</h2>
        <p>{details}</p>
        <p>{price}₪ </p>
        </div>
    </div>

    )
  }
  
  export default Item
  