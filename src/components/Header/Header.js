import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerGapLeft}></div>

      <div className={styles.logoHeaderDiv}>
        <img className={styles.headerLogo} alt="CometwebLogo" src={`${process.env.PUBLIC_URL}/header/whitelogoresized.png`}></img>
      </div>

      <div className={styles.menuHeaderDiv}>
        {/* <div className={styles.menuGap}></div>

        <div className={styles.menuOptionsDiv}>
          <p className={styles.menuOptions}>Strony i aplikacje webowe</p>
        </div>
        
        <div className={styles.menuGap}></div>

        <div className={styles.menuOptionsDiv}>
          <p className={styles.menuOptions}>Social media marketing</p>
        </div>

        <div className={styles.menuGap}></div>

        <div className={styles.menuOptionsDiv}>
          <p className={styles.menuOptions}>Vulnerability testy</p>
        </div>

        <div className={styles.menuGap}></div>

        <div className={styles.menuOptionsDiv}>
          <p className={styles.menuOptions}>Kontakt</p>
        </div> */}

        <div className={styles.menuGap}></div>

        <div className={styles.box}>
        <p className={styles.menuOptions}>Strony i aplikacje webowe</p>
        <span className={styles.underlineWhite}></span>
        </div>

        <div className={styles.menuGap}></div>

        <div className={styles.box}>
        <p className={styles.menuOptions}>Social media marketing</p>
        <span className={styles.underlineWhite}></span>
        {/* <span className={styles.underlineGray}></span> */}
        </div>

        <div className={styles.menuGap}></div>

        <div className={styles.box}>
        <p className={styles.menuOptions}>Vulnerability testy</p>
        <span className={styles.underlineWhite}></span>
        </div>

        <div className={styles.menuGap}></div>

        <div className={styles.box}>
        <p className={styles.menuOptions}>Portfolio</p>
        <span className={styles.underlineWhite}></span>
        </div>

        <div className={styles.menuGap}></div>

        <div className={styles.box}>
        <p className={styles.menuOptions}>Kontakt</p>
        <span className={styles.underlineWhite}></span>
        </div>
      </div>

      <div className={styles.headerGapRight}></div>
    </div>
  );
};

export default Header;