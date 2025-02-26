import styles from './Page.module.css'
import Wrapper from './Wrapper'

function Page({children}) {
    return (
      <Wrapper>
      <main className={styles.page}>{children}</main>
      </Wrapper>
    )
  }
  
  export default Page
  