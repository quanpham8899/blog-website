import styles from "./Footer.module.css";
import { Separator } from "./PostContainer";
import { HeaderNavBar } from "./NavBar";


export const Footer = () => {

  const github = "https://github.com/quanpham8899";

  return (
    <div className={styles.footer}>
      <div className={styles["footer-background"]}></div>
      <div className={styles["footer-title"]}>Stay in Touch</div>
      <Separator color="rgba(255, 255, 255, .7)" height={1} width={200}/>
      <div className={styles["footer-email"]}>
        <input className={styles["footer-email-input"]} type="email" placeholder="Enter your email address here"/>
        <button className={styles["footer-email-submit"]}>Submit</button>
      </div>
      <div className={styles["footer-bottom"]}>
        <span>Products of: <b>THE HANDSOME DUKE</b></span>
        <a target="_blank" href={github}><img src="github.png" alt="github link" title="Visit my github"/></a>
      </div>
    </div>
  );
}