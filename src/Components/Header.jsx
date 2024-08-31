import { useEffect, useRef } from 'react';
import styles from './Header.module.css';
import {HeaderNavBar, NavBarBackground, CategoriesNavBar} from './NavBar';

export const HeaderContent = () => {

  const title = useRef(null);
  const text = useRef(null);
  const button = useRef(null);

  useEffect(() => {
    if (title !== null) {
      title.current.style.opacity = '100';
      title.current.style.transform = "translateY(0)";
    }

    if (text !== null) {
      text.current.style.opacity = '100';
      text.current.style.transform = "translateY(0)";
    }

    if (button !== null) {
      button.current.style.opacity = '100';
    }
  }, []);

  return(
    <div className={styles["header-image-content"]}>
      <b ref={title} className={styles["header-page-title"]}>Let's do it together.</b>
      <p ref={text} className={styles["header-page-content"]}>We travel the world in search of stones. Come along for the ride</p>
      <button href="#recent-post" ref={button} className={styles["header-image-content-button"]}>View latest post</button>
    </div>
  );
}

const Header = (props) => {
  return (
    <>
      <div className={styles["header-image"]}>
        <NavBarBackground />      
        <HeaderNavBar />          
        <HeaderContent />
      </div>
    </>
  );
}

export default Header;