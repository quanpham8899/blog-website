import { useEffect, useRef, useState } from 'react';
import styles from './NavBar.module.css';


export const NavBarBackground = () => {
  const background = useRef(null);

  useEffect(() => {
    if (background !== null) {
      setTimeout(() => background.current.style.opacity = "100", 250);
    }
  }, []);

  return (
    <div ref={background} className={styles['navbar-background']}></div>
  );
}

export const NavbarHeaderSmall = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const menuPanel = useRef(null);

  window.addEventListener('resize', () => {
    setWindowWidth(window.innerWidth);
  });

  useEffect(() => {
    if (menuPanel !== null && windowWidth > 700) {
      menuPanel.current.style.transform = "translateX(100%)";
    }
  }, [windowWidth]);

  function onOpenMenu() {
    if (menuPanel !== null) {
      menuPanel.current.style.transform = "translateX(0%)";
    }
  }

  function onCloseMenu() {
    if (menuPanel !== null) {
      menuPanel.current.style.transform = "translateX(100%)";
    }
  }

  return (
    <>
      <div 
        className={styles['navbar-minimum']}
        onClick={() => onOpenMenu()}
        >
        <label>Menu</label>
        <img src="/menu-burger.png" alt="Menu Expand" />
      </div> 
      <div ref={menuPanel} className={styles["navbar-minimum-panel"]}>
        <div className={styles["navbar-panel-links"]}>
          <p onClick={onCloseMenu}>X</p>
          <a href="#">HOME</a>
          <a href="#">CATEGORIES</a>
          <a href="#">ABOUT</a>
          <a href="#">CONTACT</a>
        </div>
      </div>
    </>
  );
}

export function HeaderNavBar() {
  const navbar = useRef(null);

  useEffect(() => {
    if (navbar !== null) {
      setTimeout(() => navbar.current.style.opacity = "100", 250);
    }
  }, []);

  return (
    <div ref={navbar} className={styles['navbar-container']}>
      <div className={styles['home-page-logo']}>
        <a href="#" >
          BLOG
        </a>
      </div>
      <NavbarHeaderSmall />
      <nav className={styles['navbar-content']}>
        <a href="#">HOME</a>
        <a href="#">CATEGORIES</a>
        <a href="#">ABOUT</a>
        <a href="#">CONTACT</a>
      </nav>

    </div>
  );
}

export const CategoriesNavBar = () => {
  
  const [categories, setCategories] = useState([
    {key: "nature", name: 'Nature', link: '#'},
    {key: "photography", name: 'Photography', link: '#'},
    {key: "relaxation", name: 'Relaxation', link: '#'},
    {key: "vacation", name: 'Vacation', link: '#'},
    {key: "travel", name: 'Travel', link: '#'},
    {key: "adventure", name: 'Adventure', link: '#'}
  ]);

  return (
    <div className={styles['categories-container']}> 
      <div className={`${styles['navbar-container']} ${styles['categories-navbar']}`}>
        {
          categories.map((cat, index) => (
            <a href={cat.link} key={cat.key}>{cat.name}</a>
          ))
        }
      </div>
    </div>
  );
};