import styles from './MainPage.module.scss';
import clsx from 'clsx';
import Typed from 'typed.js';
import { useEffect, useRef } from 'react';

const MainPage = () => {
  
  const el = useRef(null);
  // Create reference to store the Typed instance itself
	const typed = useRef(null);

  useEffect(() => {
    const options = {
    	strings: [
        'Strony internetowe',
        'Aplikacje webowe',
        'Cybersecurity',
        'Strony internetowe',
        'Aplikacje webowe',
        'Cybersecurity',
        'Strony internetowe',
        'Aplikacje webowe',
        'Cybersecurity',
        'Strony internetowe',
        'Aplikacje webowe',
        'Cybersecurity',
        'Strony internetowe',
        'Aplikacje webowe',
        'Cybersecurity',
        'Strony internetowe',
        'Aplikacje webowe',
        'Cybersecurity',
        'Strony internetowe',
        'Aplikacje webowe',
        'Cybersecurity',
        'Strony internetowe',
        'Aplikacje webowe',
        'Cybersecurity',
        'Strony internetowe',
        'Aplikacje webowe',
        'Cybersecurity',
        'Strony internetowe',
        'Aplikacje webowe',
        'Cybersecurity',
        'Strony internetowe',
        'Aplikacje webowe',
        'Cybersecurity',
        'Strony internetowe',
        'Aplikacje webowe',
        'Cybersecurity',
        'Strony internetowe',
        'Aplikacje webowe',
        'Cybersecurity',
        'Strony internetowe',
        'Aplikacje webowe',
        'Cybersecurity',
        

        'Strony internetowe'
      ],
      typeSpeed: 50,
      backSpeed: 50,
    };
    
    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);
    
    return () => {
      typed.current.destroy();
      // typed.current.reset();
    }
  }, [])

  return (
    <div 
    // className={styles.main} style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/baki.png'})`}}
    >
      
      {/* <button onClick={() => typed.current.toggle()}>Toggle</button>
      <button onClick={() => typed.current.start()}>Start</button>
      <button onClick={() => typed.current.stop()}>Stop</button>
      <button onClick={() => typed.current.reset()}>Reset</button>
      <button onClick={() => typed.current.destroy()}>Destroy</button> */}
    {/* </div> */}

      <div className={styles.wrapper}>
        
         <div className={clsx(styles.cols, styles.cols0)}><div className={styles.gapDiv}></div>
          <div className={styles.innerDiv}>
            <img className={styles.logo} alt="CometwebLogo" src={`${process.env.PUBLIC_URL}/Cometweb/1transparent.png`}></img>
          </div>
          {/* <div className={styles.gapDiv}></div> */}
            {/* <span className={styles.topline}>Cześć</span> */}
            <h1 className={styles.title}>Czym się zajmujemy? </h1>
            
            <h1 className={styles.multiText}>
            <span className={styles.multiText}>
              <span style={{ whiteSpace: 'pre' }} ref={el} />
            </span></h1>
            <p className={styles.p}>
              
            

            Łączymy kreatywność z najnowocześniejszymi technologiami, aby zapewnić Tobie najsilniejszą pozycję w sieci. 
            Jesteśmy specjalistami w tworzeniu stron i aplikacji webowych, 
            social media marketingu, cyberbezpieczeństwie oraz brandingu.
            Każdy projekt jest dla nas unikalny i traktujemy go z indywidualnym podejściem, 
            tak aby zapewnić Tobie nie tylko świetnie wyglądającą stronę i niezawodną aplikację, ale również najefektywniej rozpromować ją w sieci.
              
            {/* Wzmacniamy pozycję
            Twojego biznesu w sieci. Jesteśmy specjalistami w tworzeniu stron i aplikacji webowych, 
            social media marketingu, cyberbezpieczeństwie oraz brandingu.

            Łączymy kreatywność z najnowocześniejszymi technologiami, aby zapewnić Tobie jak najlepsze możliwe rozwiązania. 
            Dla nas każdy projekt jest unikalny i traktujemy go z indywidualnym podejściem, 
            tak aby zapewnić Tobie nie tylko świetnie wyglądającą stronę i niezawodną aplikację, ale również najefektywniej rozpromować ją w sieci. */}
            </p>
            <div className={styles.btns}>
               <button className={styles.button}>Sprawdź naszą ofertę</button>
            </div>
         </div>
         {/* <div className={clsx(styles.cols, styles.cols1)}>
            <div className={styles.imgbox}> */}
               {/* <img src="splash.png" id="splash"> */}
               {/* <img className={styles.image} id="splash" alt="splash" src={`${process.env.PUBLIC_URL}/MainPage/splash.png`}></img> */}
               {/* <img className={styles.imaged} alt="CometwebLogo" src={`${process.env.PUBLIC_URL}/MainPage/img.png`}></img> */}
               {/* <img src="img.png"> */}
            {/* </div>
         </div> */}
      </div>




    </div>
  );
};

export default MainPage;