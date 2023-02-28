import styles from './Tabs.module.scss';
import clsx from 'clsx';
// import 'https://unpkg.com/swiper@8/swiper-bundle.min.css';
import { useState } from 'react';


const Tabs = props => {

  console.clear();

  const tabsArray = [
    {
      desc: 'Tab 0',
    },

    {
      desc: 'Tab 1',
    },

    {
      desc: 'Tab 2',
    },

    {
      desc: 'Tab 3',
    },

    {
      desc: 'Tab 4',
    },

    {
      desc: 'Tab 5',
    },

    {
      desc: 'Tab 6',
    },


  ];

  const [mainTabMinusThree, setMainTabMinusThree] = useState(0);
  const [mainTabMinusTwo, setMainTabMinusTwo] = useState(1);
  const [mainTabMinusOne, setMainTabMinusOne] = useState(2);
  const [mainTab, setMainTab] = useState(3);
  const [mainTabPlusOne, setMainTabPlusOne] = useState(4);
  const [mainTabPlusTwo, setMainTabPlusTwo] = useState(5);
  const [mainTabPlusThree, setMainTabPlusThree] = useState(6);

  const prevTab = () => {
    if(mainTab === 6 ) {
      setMainTabMinusThree(2);
      setMainTabMinusTwo(3);
      setMainTabMinusOne(4);
      setMainTab(mainTab - 1);
      setMainTabPlusOne(6);
      setMainTabPlusTwo(0);
      setMainTabPlusThree(1);

    } else if (mainTab === 5 ){
      setMainTabMinusThree(1);
      setMainTabMinusTwo(2);
      setMainTabMinusOne(3);
      setMainTab(mainTab - 1);
      setMainTabPlusOne(5);
      setMainTabPlusTwo(6);
      setMainTabPlusThree(0);

    } else if (mainTab === 4 ){
      setMainTabMinusThree(0);
      setMainTabMinusTwo(1);
      setMainTabMinusOne(2);
      setMainTab(mainTab - 1);
      setMainTabPlusOne(4);
      setMainTabPlusTwo(5);
      setMainTabPlusThree(6);

    } else if (mainTab === 3 ){
      setMainTabMinusThree(6);
      setMainTabMinusTwo(0);
      setMainTabMinusOne(1);
      setMainTab(mainTab - 1);
      setMainTabPlusOne(3);
      setMainTabPlusTwo(4);
      setMainTabPlusThree(5);

    } else if (mainTab === 2 ){
      setMainTabMinusThree(5);
      setMainTabMinusTwo(6);
      setMainTabMinusOne(0);
      setMainTab(mainTab - 1);
      setMainTabPlusOne(2);
      setMainTabPlusTwo(3);
      setMainTabPlusThree(4);

    } else if (mainTab === 1 ){
      setMainTabMinusThree(4);
      setMainTabMinusTwo(5);
      setMainTabMinusOne(6);
      setMainTab(mainTab - 1);
      setMainTabPlusOne(1);
      setMainTabPlusTwo(2);
      setMainTabPlusThree(3);

    } else if (mainTab === 0 ){
      setMainTabMinusThree(3);
      setMainTabMinusTwo(4);
      setMainTabMinusOne(5);
      setMainTab(6);
      setMainTabPlusOne(0);
      setMainTabPlusTwo(1);
      setMainTabPlusThree(2);

    }
  }

  const nextTab = () => {
    if(mainTab === 6 ) {
      setMainTabMinusThree(4);
      setMainTabMinusTwo(5);
      setMainTabMinusOne(6);
      setMainTab(0);
      setMainTabPlusOne(1);
      setMainTabPlusTwo(2);
      setMainTabPlusThree(3);

    } else if (mainTab === 5 ){
      setMainTabMinusThree(3);
      setMainTabMinusTwo(4);
      setMainTabMinusOne(5);
      setMainTab(mainTab + 1);
      setMainTabPlusOne(0);
      setMainTabPlusTwo(1);
      setMainTabPlusThree(2);

    } else if (mainTab === 4 ){
      setMainTabMinusThree(2);
      setMainTabMinusTwo(3);
      setMainTabMinusOne(4);
      setMainTab(mainTab + 1);
      setMainTabPlusOne(6);
      setMainTabPlusTwo(0);
      setMainTabPlusThree(1);

    } else if (mainTab === 3 ){
      setMainTabMinusThree(1);
      setMainTabMinusTwo(2);
      setMainTabMinusOne(3);
      setMainTab(mainTab + 1);
      setMainTabPlusOne(5);
      setMainTabPlusTwo(6);
      setMainTabPlusThree(0);

    } else if (mainTab === 2 ){
      setMainTabMinusThree(0);
      setMainTabMinusTwo(1);
      setMainTabMinusOne(2);
      setMainTab(mainTab + 1);
      setMainTabPlusOne(4);
      setMainTabPlusTwo(5);
      setMainTabPlusThree(6);

    } else if (mainTab === 1 ){
      setMainTabMinusThree(6);
      setMainTabMinusTwo(0);
      setMainTabMinusOne(1);
      setMainTab(mainTab + 1);
      setMainTabPlusOne(3);
      setMainTabPlusTwo(4);
      setMainTabPlusThree(5);

    } else if (mainTab === 0 ){
      setMainTabMinusThree(5);
      setMainTabMinusTwo(6);
      setMainTabMinusOne(0);
      setMainTab(mainTab + 1);
      setMainTabPlusOne(2);
      setMainTabPlusTwo(3);
      setMainTabPlusThree(4);

    }
  }

  return (
    <div className={styles.cont}>
      <div className={styles.div}>
        <div className={styles.a}>
          
        {tabsArray[mainTabMinusThree].desc}
          
        </div>
          <div className={styles.b}>
            
            {tabsArray[mainTabMinusTwo].desc}
            
          </div>
            <div className={styles.c}>
              
              {tabsArray[mainTabMinusOne].desc}
              
            </div>
              <div className={styles.d}>
                
                {tabsArray[mainTab].desc}
                
              </div>
            <div className={styles.c}>
              
              {tabsArray[mainTabPlusOne].desc}
              
            </div>
          <div className={styles.b}>
            
            {tabsArray[mainTabPlusTwo].desc}
            
          </div>
        <div className={styles.a}>
          
          {tabsArray[mainTabPlusThree].desc}
          
        </div>
      </div>

      <div width="100%" className={styles.u}>
        <button type="button" className={styles.button} onClick={() =>{prevTab()}}>to left</button>
        <button type="button" className={styles.button} onClick={() =>{nextTab()}}>to right</button>
        <p>mainTab: {mainTab}</p>
      </div>
    </div>
  );
};

export default Tabs;


// function setColor(color) {
//   props.cartItem.currentColor = color;
//   props.setCartItems(current => [...current,]);
// }

// return (
//   <div className={styles.productColors}>
//     <h3 className={styles.optionTitleColors}>Color:</h3>
//     <ul className={styles.choicesColors}>
//       {props.cartItem.colors.map(color =>
//         <li key={color}>
//           <button type="button" 
//             className={clsx(prepareColorClassName(color), props.cartItem.currentColor === color && styles.activeColors)} 
//             onClick={() =>{setColor(color);}}/>