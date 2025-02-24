import styles from './Page.module.css'

function Page({children}) {
    return (
      <main className={styles.page}>{children}</main>
    )
  }
  
  export default Page
  