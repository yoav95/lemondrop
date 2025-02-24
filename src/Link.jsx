import styles from './Link.module.css'
import { Link as reactRouterLink } from 'react-router-dom'
function Link({children, color, to}) {
    return (
      <>
      <reactRouterLink to={to}></reactRouterLink>
        <a className={styles.link} style={{color:`${color}`}}>{children}</a>
      </>
    )
  }
  
  export default Link
  