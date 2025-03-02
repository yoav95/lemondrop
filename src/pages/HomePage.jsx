import React from 'react'
import Page from './Page'
import styles from './HomePage.module.css'
import Button from '../helpers/Botton'
import Wrapper from '../helpers/Wrapper'
const HomePage = () => {
  return (
    <Page>
        <div className={styles.homepagecontent}>
        <div className={styles.image}><div className={styles.color}></div><img src="./images/bg.JPG"/></div>
        <div className={styles.card}>
        
    
    <Wrapper>
    <h1>ארוז במהירות, רכב באולטרה-לייט עם תיקי אופניים שתוכננו בקפידה ויוצרו מקומית.</h1>
    <p>היה מוכן להרפתקאות, בין אם מדובר במסע של מספר ימים כמו טור אאוטארואה או סטייה מהשביל הראשי.</p>
    <p>אם אתה חדש בעולם הבייקפאקינג, עיין בתמונה האינטראקטיבית למטה ובמדריך האריזה לרוכבים כדי להתחיל.</p>
    <Button text="התאמה אישית לתיק שילדה"/>
    </Wrapper>
        </div>
        </div>
    </Page>
    
    
  )
}

export default HomePage