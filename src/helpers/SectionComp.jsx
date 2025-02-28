import { useState } from 'react'
import styles from './SectionComp.module.css'
const SectionComp = ({ children, heading, type }) => {
    const [open, setOpen] = useState(type === 'h1' ? true : false)
    const toggle = () => {
        setOpen((prev) => !prev)
    }
    const handleChildClick = (event) => {
        event.stopPropagation(); // Stops event from bubbling to the parent
        console.log("Child clicked");
        toggle()
      };
  return (
    <div className={styles.comp} onClick={handleChildClick}>
        {type === 'h1' ? <h1>{heading}</h1> : <h2>{heading}</h2>}
        {open ? <>{children}</> : null}
    </div>
  )
}

export default SectionComp;