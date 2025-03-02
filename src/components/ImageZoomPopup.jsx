import styles from './ImageZoomPopup.module.css'
function ImageZoomPopup({ imageSrc, closePopup }) {
  return (
    <>
    <div className="zoom-popup" className={styles.popup} onClick={closePopup}>
      <div className={styles.content}>
        <img src={imageSrc} alt="Zoomed Image" className="zoomed-image" />
      </div>
    </div>
    <div className={styles.fade} onClick={closePopup}></div></>
  );
}

export default ImageZoomPopup;