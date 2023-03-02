import styles from './Footer.module.scss';
import { FaFacebookSquare, FaPhoneAlt, FaEnvelope, FaAngleRight } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footerSection}>
        <div className={styles.footerContainer}>
          <div className={styles.footerWrapper}>
            <div  className={styles.footerNav}>
              <div className={styles.box}>
                <p className={styles.footerColumn}>
                  Strony i aplikacje webowe
                </p> 
                <span className={styles.underlineWhite}></span>
              </div>

              <div className={styles.box}>
                <p className={styles.footerColumn}>
                  Social media marketing
                </p> 
                <span className={styles.underlineWhite}></span>
              </div>

              <div className={styles.box}>
                <p className={styles.footerColumn}>
                  Vulnerability testy
                </p> 
                <span className={styles.underlineWhite}></span>
              </div>

              {/* <div className={styles.box}>
                <p className={styles.footerColumn}>
                  Portfolio
                </p> 
                <span className={styles.underlineWhite}></span>
              </div> */}

              <div className={styles.box}>
                <p className={styles.footerColumn}>
                  Kontakt
                </p> 
                <span className={styles.underlineWhite}></span>
              </div>
            </div>

            <div  className={styles.footerNav}>
              <div className={styles.box}>
                <p className={styles.footerColumn}>
                  <FaAngleRight />  Polityka prywatności
                </p>
                <span className={styles.underlineWhite}></span>
              </div>

              <div className={styles.box}>
                <p className={styles.footerColumn}>
                  <FaAngleRight /> Polityka Cookie
                </p> 
                <span className={styles.underlineWhite}></span>
              </div>

              <div className={styles.box}>
                <p className={styles.footerColumn}>
                  <FaAngleRight /> FAQ
                </p>  
                <span className={styles.underlineWhite}></span>
              </div>
            </div>

            <div  className={styles.footerNav}>
              <div className={styles.box}>
                <p className={styles.footerColumn}>
                  <FaEnvelope /> kontakt@cometweb.pl
                </p>
                <span className={styles.underlineWhite}></span>
              </div>

              <div className={styles.box}>
                <p className={styles.footerColumn}>
                  <FaPhoneAlt/> +48 690 688 835
                </p> 
                <span className={styles.underlineWhite}></span>
              </div>

              <div className={styles.box}>
                <p className={styles.footerColumn}>
                  <FaFacebookSquare/> fb.com/cometweb
                </p> 
              <span className={styles.underlineWhite}></span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.copyrightFooter}>
          <div className={styles.copyrightDiv}>
            <p>© All rights reserved</p>
            <img className={styles.footerLogo} alt="CometwebLogo" src={`${process.env.PUBLIC_URL}/Cometweb/1transparentdown.png`}></img>
          </div>
        </div>
      </footer>
  );
};

export default Footer;