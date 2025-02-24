import React from 'react'
import Page from './Page'
import styles from './ContactPage.module.css'
const ContactPage = () => {
  return (
    <Page>
        <div className={styles.contact}>
        <h1>יצירת קשר</h1>
        <p>אם יש שאלה, צרו קשר .</p>
        <p>lemondrop95@gmail.com</p>
        <p>@madebylemondrop</p>
    </div>
    </Page>
  )
}

export default ContactPage