import styles from './Header.module.scss';
import React, { useState } from "react";
import clsx from 'clsx';

const Header = () => {

  const [menuIcon, setMenuIcon] = useState("menubars");
  let toggleIcon = menuIcon ? 'menubars' : 'x';

  // const [isActive, setActive] = useState("false");
  // let toggleClass = isActive ? '' : 'wholeMenu';

  function handleClick(){
    setMenuIcon(menuIcon => !menuIcon);
    // setActive(isActive => !isActive);
  };

  console.log('dfdff: ', toggleIcon, 'x')

  // function handleClick(){
  //   setActive(isActive => !isActive);
  // };
  
  return (
    <>
    <div className={styles.header}>
      <div className={styles.headerGapLeft}></div>

      <div className={styles.logoHeaderDiv}>
        <img className={styles.headerLogo} alt="CometwebLogo" src={`${process.env.PUBLIC_URL}/header/whitelogoresized.png`}></img>
      </div>

      <div className={styles.menuHeaderDiv}>
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

      <div className={styles.headerMenuBars} onClick={()=>{
        handleClick();
      }}>
        <img className={styles.menuBars} alt="CometwebLogo" src={`${process.env.PUBLIC_URL}/icons/${toggleIcon}.png`}></img>
      </div>

      <div className={styles.headerGapRight}></div>
    </div>

      <div className={clsx(toggleIcon === 'x' && styles.wholeMenu, toggleIcon === 'menubars' && styles.hiddenMenu)}>

        <div className={clsx(toggleIcon === 'x' && styles.toggleMenuDiv, toggleIcon === 'menubars' && styles.toggleMenuDivHidden)}>
          <div className={styles.toggleMenuOptionDiv}>
            <p className={styles.toggleMenuOptions}>Strony i aplikacje webowe</p>
            <span className={styles.underlineWhite}></span>
          </div>

          <div className={styles.toggleMenuOptionDiv}>
            <p className={styles.toggleMenuOptions}>Social media marketing</p>
            <span className={styles.underlineWhite}></span>
          </div>

          <div className={styles.toggleMenuOptionDiv}>
            <p className={styles.toggleMenuOptions}>Vulnerability testy</p>
            <span className={styles.underlineWhite}></span>
          </div>

          <div className={styles.toggleMenuOptionDiv}>
            <p className={styles.toggleMenuOptions}>Portfolio</p>
            <span className={styles.underlineWhite}></span>
          </div>

          <div className={styles.toggleMenuOptionDiv}>
            <p className={styles.toggleMenuOptions}>Kontakt</p>
            <span className={styles.underlineWhite}></span>
          </div>
        </div>



      </div>



    </>
  );
};

export default Header;