import styles from './Home.module.scss';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MainPage from '../MainPage/MainPage';
import Cards from '../Cards/Cards';
import Values from '../Values/Values';

const Home = () => {

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  return (
    <>

    <div className={styles.servicesBack} style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/bakii.png'})`}}>
    <MainPage />
    
      {/* <div className={styles.imageContainer}
        style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/gal.png'})`}}
      ><FaMobileAlt />
        <div className={styles.innerDiv}>
          <img className={styles.logo} alt="CometwebLogo" src={`${process.env.PUBLIC_URL}/Cometweb/logocut.png`}></img>
        </div>
      </div> */}

      <div className={styles.phoneTab}>
        <div className={styles.hoverLinePhone}>
          <div className={styles.hoverInnerPhone}>
            <p className={styles.number}>
              &nbsp;&nbsp; +48 <strong>690 688 835 </strong>
            </p>
            <div className={styles.imgPhotoDiv}>
              <img className={styles.imgPhoto} alt="phone" src={`${process.env.PUBLIC_URL}/tel.png`}></img>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.emailTab}>
        <div className={styles.hoverLineEmail}>
          <div className={styles.hoverInnerEmail}>
            <p className={styles.email}>
              &nbsp;&nbsp;biuro@cometweb.pl
            </p>
            <div className={styles.imgEmailDiv}>
              <img className={styles.imgEmail} alt="email" src={`${process.env.PUBLIC_URL}/emailicon.png`}></img>
            </div>
          </div>
        </div>
      </div>

      
      <div className={styles.facebookTab}>
        <div className={styles.hoverLineFacebook}>
          <div className={styles.hoverInnerFacebook}>
            <p className={styles.facebook}>
              &nbsp;&nbsp;fb.com/cometweb
            </p>
            <div className={styles.imgPhotoDiv}>
              <img className={styles.imgPhoto} alt="facebook" src={`${process.env.PUBLIC_URL}/facebookicon.png`}></img>
            </div>
          </div>
        </div>
    </div>
    
    

      <div className={styles.gapAfterMain}></div>

      {/* <div className={styles.aboutUsBackground} >
        <div className={styles.aboutUsSection} >
        
          <h1 className={styles.whatWeDoing} data-aos="fade-down">Czym si?? zajmujemy?</h1>
          <div className={styles.lines} data-aos="fade-left">
            <div className={styles.FirstLine}></div>
            <div className={styles.SecondLineDarken}></div>
            <div className={styles.ThirdLine}></div>
          </div>
          <p className={styles.descAboutUs}>
            Naszym celem jest wzmocnienie pozycji Twojego biznesu w sieci.
            Jeste??my specjalistami w tworzeniu stron i aplikacji webowych, social media marketingu,
            cyberbezpiecze??stwie oraz brandingu.
          </p>

          <p className={styles.descAboutUs}>
            ????czymy kreatywno???? z najnowocze??niejszymi technologiami, 
            aby zapewni?? Tobie jak najlepsze mo??liwe rozwi??zania. Dla nas ka??dy projekt jest unikalny i traktujemy go z indywidualnym podej??ciem, 
            tak aby zapewni?? Tobie nie tylko ??wietnie wygl??daj??c?? stron?? i niezawodn?? aplikacj??, ale r??wnie?? najefektywniej rozpromowa?? j?? w sieci.
          </p>
        </div>
        
      </div> */}

      {/* <div className={styles.servicesBack} style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/pointer.png'})`}}> */}
      <div className={styles.sevicesSection}>
        <Link className={styles.link} to="/tworzeniestroniaplikacjiinternetowych">
          <div className={styles.servicesCardLeft}>
            <div className={styles.desc}>
              <div className={styles.title}>
                <h1 data-aos="fade-down">
                  Tworzenie stron i aplikacji internetowych
                </h1>
              </div>
              <div className={styles.linesCenter} data-aos="fade-right">
                <div className={styles.FirstLine}></div>
                <div className={styles.SecondLine}></div>
                <div className={styles.ThirdLine}></div>
              </div>
              <p>
                Projektujemy responsywne strony internetowe oraz aplikacje webowe, zapewniaj??ce wiarygodno???? i profesjonalizm Twojej
                dzia??alno??ci co wp??ynie na jej rozw??j i zwiekszenie zysk??w. W dzisiejszych czasach obecno???? w internecie jest 
                niezb??dna do dotarcia do najszerszego grona odbiorc??w 
                oraz zapewnienia ??atwej i efektywnej komunikacji oraz wsp????pracy z klientem.
              </p>
            </div>

            <div className={styles.gapBetween}></div>

            <div className={styles.imgDiv}>
              <img className={styles.img} alt="homewebdesign" src={`${process.env.PUBLIC_URL}/homewebdesign.jpg`}></img>
            </div>
          </div>
        </Link>
      </div>

      <div className={styles.interlude}>
        <div className={styles.interludeFilling}></div>
      </div>

      <div className={styles.sevicesSection}>
        <Link className={styles.link} to="/socialmediamarketing">
          <div className={styles.servicesCardLeft}>

            <div className={styles.imgDiv}>
              <img className={styles.img} alt="homesmm" src={`${process.env.PUBLIC_URL}/homesmm.jpg`}></img>
            </div>

            <div className={styles.gapBetween}></div>

            <div className={styles.desc}>
              <div className={styles.title}>
                <h1 data-aos="fade-down">
                  Social media marketing &nbsp;
                </h1>
              </div>
              <div className={styles.linesCenter} data-aos="fade-left">
                <div className={styles.FirstLine}></div>
                <div className={styles.SecondLine}></div>
                <div className={styles.ThirdLine}></div>
              </div>
              <p>
                Social media marketing jest aktualnie najefektywniejsz?? form?? reklamy oraz dotarcia 
                do najliczniejszej publiczno??ci. Nie tylko pomo??emy Ci zdoby?? wi??ksz?? liczb?? klient??w ale r??wnie?? zbudujemy
                ??wiadomo???? i reputacje Twojej marki. Stworzymy tak??e Twoje logo oraz zajmiemy sie copywritingiem.
              </p>
            </div>
          </div>
        </Link>
      </div>

      <div className={styles.interlude}>
        <div className={styles.interludeFilling}></div>
      </div>

      <div className={styles.sevicesSection}>
        <Link className={styles.link} to="/vulnerabilitytesty">
          <div className={styles.servicesCardLeft}>
            <div className={styles.desc}>
              <div className={styles.title}>
                <h1 data-aos="fade-down">
                  Vulnerability testy
                </h1>
              </div>
              <div className={styles.linesCenter} data-aos="fade-right">
                <div className={styles.FirstLine}></div>
                <div className={styles.SecondLine}></div>
                <div className={styles.ThirdLine}></div>
              </div>
              <p>
                Testy vulnerability to szczeg????owa i profesjonalna analiza bezpiecze??stwa Twojej strony internetowej, 
                kt??ra pozwala na zidentyfikowanie potencjalnych luk bezpiecze??stwa. 
                Nasze testy opieraj?? si?? na najnowszych metodach i narz??dziach bran??owych, 
                aby zapewni?? najbardziej kompleksowe i dok??adne wyniki.
              </p>
            </div>

            <div className={styles.gapBetween}></div>

            <div className={styles.imgDiv}>
              <img className={styles.img} alt="homecybersec" src={`${process.env.PUBLIC_URL}/homecybersec.jpg`}></img>
            </div>
          </div>
        </Link>
      </div>
      {/* </div> */}

      <div className={styles.justDiv}></div>

      </div>

      <div className={styles.contactUsSection} 
        style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/wycena.jpg'})`}}>
        <Link className={styles.buttonContactLink} to="/contact">
          <button className={styles.buttonContact}><div>&nbsp;&nbsp; Skontaktuj si?? z nami po darmow?? wycen?? &nbsp;&nbsp;</div></button>
        </Link>
      </div>

      <div className={styles.whoAreWeBackground}
        style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/light.png'})`}}>        
        {/* <div className={styles.thinkGap}></div> */}

        {/* <div className={styles.howWeWorkSection}> */}
        
          
        



          

          {/* 
          
          Zbudowa?? wybitny zesp???? ekspert??w, kt??ry poradzi sobie z ka??dym wyzwaniem

          Traktowa?? ka??dego klienta jako cz?????? zespo??u

          Rozwijaj tylko te projekty, w kt??re wierzymy

          Traktujemy ka??dy projekt - ma??y czy du??y - jako r??wnie wa??ny

          Proponuj ulepszenia i przyczyniaj si?? do sukcesu projektu

          Znajd?? czas dla klient??w, kiedy tylko tego potrzebuj??

          Wk??adamy ca??e serce w to, co robimy

          Poszerzamy nasz?? wiedz?? i dzielimy si?? ni?? z klientami

          B??d?? dumny z tego, co dostarczamy 
          
          */}

          


        <div className={styles.whoAreWeSection}>
          <h1 data-aos="fade-down">Czym si?? zajmujemy?</h1>
          <div className={styles.lines} data-aos="fade-left">
            <div className={styles.FirstLine}></div>
            <div className={styles.SecondLine}></div>
            <div className={styles.ThirdLine}></div>
          </div>
          <p className={styles.whoAreWeDesc}>
            W Cometweb rozumiemy jak wa??na jest silna obecno???? w sieci w dzisiejszym cyfrowym ??wiecie, 
            dlatego te?? ??ci??le wsp????pracujemy z naszymi klientami, aby zrozumie?? ich cele i wizje, a nast??pnie prze??o??y?? 
            je na stron?? internetow??, kt??ra dok??adnie reprezentuje ich mark?? oraz nap??dza wyniki.
            Wykorzystujemy najnowsze technologie i trendy w projektowaniu, aby tworzy?? strony internetowe, kt??re s?? nie 
            tylko atrakcyjne wizualnie, ale r??wnie?? funkcjonalne i przyjazne dla u??ytkownika.
          </p>

          <div className={styles.lineGap}></div>

          <p className={styles.whoAreWeDesc}>
            Niezale??nie od tego, czy chcesz uruchomi?? now?? stron?? internetow??, od??wie??y?? istniej??c??, czy poprawi?? swoj?? 
            strategi?? marketingow?? online, posiadamy wiedz?? i do??wiadczenie, kt??re pomog?? Ci zwi??kszy?? zyski i odnie???? sukces.
          </p>
        </div>

    

        <div className={styles.howWeWorkSectionLabel}>
          <div className={styles.howWeWorkTopLabel}>
            <h1 data-aos="fade-down">Jak pracujemy?</h1>
            <div className={styles.lines} data-aos="fade-left">
              <div className={styles.FirstLine}></div>
              <div className={styles.SecondLine}></div>
              <div className={styles.ThirdLine}></div>
            </div>
          </div>
        </div>

        <div className={styles.howWeWorkSection}>
          <div className={styles.stepsDiv}>
            <div className={styles.steps}>
              <div className={styles.singleStep}>
                <div className={styles.stepTitleDiv}>
                  <Cards title='Wymagania i wycena' cardImgId='icon1'
                    desc='Najpierw, musimy zrozumie?? Tw??j projekt, aby m??c spe??ni?? Twoje oczekiwania.
                      Przygotujemy dok??adn?? wycen?? i oszacujemy potrzebny czas na realizacj??.'
                  />
                </div>

                <div className={styles.leftBar}>
                  <div className={styles.stepEmpty}></div>
                  <div className={styles.dotLeft}>
                    <div className={styles.innerDot}></div>
                  </div>
                  <div className={styles.stepProgressBarLeft}></div>
                </div>
              </div>

              <div className={styles.singleStep}>
                <div className={styles.stepTitleDiv}>
                  <Cards title='Planowanie i projektowanie' cardImgId='icon2'
                    desc='Zaplanujemy nasz?? prac??, zidentyfikujemy mo??liwe wyzwania i upewnimy si??, 
                      ??e mo??liwe jest spe??nienie wszystkich wymaga??.
                      Zaprojektujemy Twoj?? aplikacj?? i przygotujemy architektur?? systemu.'
                  />
                </div>

                <div className={styles.stepProgressBarFull}>
                  <div className={styles.dot}>
                    <div className={styles.innerDot}></div>
                  </div>
                </div>
              </div>
            
              <div className={styles.singleStep}>
                <div className={styles.stepTitleDiv}>
                  <Cards title='Kodowanie i testowanie' cardImgId='icon3'
                    desc='Powo??amy do ??ycia Twoj?? aplikacj??, tworz??c front-end i back-end.
                      Zadbamy o jej bezpiecze??stwo oraz upewnimy si??, ??e aplikacja dzia??a zgodnie z za??o??eniami.'
                  />
                </div>

                <div className={styles.stepProgressBarFull}>
                  <div className={styles.dot}>
                    <div className={styles.innerDot}></div>
                  </div>
                </div>
              </div>

              <div className={styles.singleStep}>
                <div className={styles.stepTitleDiv}>
                  <Cards className={styles.gh} title='Wdro??enie i utrzymanie' cardImgId='icon4'
                    desc='Kiedy Twoja aplikacja b??dzie gotowa, zostanie uruchomiona i b??dzie utrzymywana. 
                      Je??li b??dzie to planowane, opracujemy dodatkowe funkcje.'
                  />
                </div>

                <div className={styles.leftBar}>
                  <div className={styles.stepProgressBarLeft}></div>
                  <div className={styles.dotLeft}>
                    <div className={styles.innerDot}></div>
                  </div>
                  <div className={styles.stepEmpty}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Values />

      </div>
    </>
  );
};

export default Home;