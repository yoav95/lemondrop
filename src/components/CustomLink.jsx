import styles from "./CustomLink.module.css";
import { NavLink } from "react-router-dom";
const CustomLink = ({text, link}) => {
  return (
    <NavLink to={link} className={({ isActive }) =>
      isActive ? `${styles.link} ${styles.active}` : styles.link} >
      <span className={styles.mask}>
        <div className={styles.linkContainer}>
          <span className={`${styles.linkTitle1} ${styles.title}`}>{text}</span>
          <span className={`${styles.linkTitle2} ${styles.title}`}>{text}</span>
        </div>
      </span>

    </NavLink>
  );
};

export default CustomLink;
