import React from 'react'
import styles from './HomePage.module.css'
import Page from './Page'

const CustomPage = () => {
  return (
    <>
    <div className={styles.image}><img src="/images/image.jpg"/></div>
    <Page>
    
            <div className={styles.details}>
                <h1>תיקים בהתאמה אישית</h1>
                <p>אנו תופרים תיקי שילדה בהתאמה אישית לאופניים שלך</p>
                <p>לפרטים צור קשר</p>
            </div>
            </Page>
    </>
    
  )
}

export default CustomPage