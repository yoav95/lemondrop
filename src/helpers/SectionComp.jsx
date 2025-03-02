import { useState } from 'react'
import styles from './SectionComp.module.css'
import { AiOutlineArrowLeft } from "react-icons/ai";const SectionComp = ({ children, heading, type }) => {
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
        {type === 'h1' ? <div className={styles.arrow}><h1>{heading}</h1><AiOutlineArrowLeft className={open ? `${styles.icon} ${styles.open}`: styles.icon}size={25} /></div> : <div className={styles.arrow}><h2>{heading}</h2>< AiOutlineArrowLeft className={open ? `${styles.icon} ${styles.open}`: styles.icon} size={25}/></div>}
        {open ? <>{children}</> : null}
    </div>
  )
}

export default SectionComp;