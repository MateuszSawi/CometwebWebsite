import styles from './Home.module.scss';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaMobileAlt } from "react-icons/fa";
import { FaFacebookSquare, FaPhoneAlt, FaEnvelope, FaAngleRight } from "react-icons/fa";
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
        
          <h1 className={styles.whatWeDoing} data-aos="fade-down">Czym się zajmujemy?</h1>
          <div className={styles.lines} data-aos="fade-left">
            <div className={styles.FirstLine}></div>
            <div className={styles.SecondLineDarken}></div>
            <div className={styles.ThirdLine}></div>
          </div>
          <p className={styles.descAboutUs}>
            Naszym celem jest wzmocnienie pozycji Twojego biznesu w sieci.
            Jesteśmy specjalistami w tworzeniu stron i aplikacji webowych, social media marketingu,
            cyberbezpieczeństwie oraz brandingu.
          </p>

          <p className={styles.descAboutUs}>
            Łączymy kreatywność z najnowocześniejszymi technologiami, 
            aby zapewnić Tobie jak najlepsze możliwe rozwiązania. Dla nas każdy projekt jest unikalny i traktujemy go z indywidualnym podejściem, 
            tak aby zapewnić Tobie nie tylko świetnie wyglądającą stronę i niezawodną aplikację, ale również najefektywniej rozpromować ją w sieci.
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
                Projektujemy responsywne strony internetowe oraz aplikacje webowe, zapewniające wiarygodność i profesjonalizm Twojej
                działalności co wpłynie na jej rozwój i zwiekszenie zysków. W dzisiejszych czasach obecność w internecie jest 
                niezbędna do dotarcia do najszerszego grona odbiorców 
                oraz zapewnienia łatwej i efektywnej komunikacji oraz współpracy z klientem.
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
                Social media marketing jest aktualnie najefektywniejszą formą reklamy oraz dotarcia 
                do najliczniejszej publiczności. Nie tylko pomożemy Ci zdobyć większą liczbę klientów ale również zbudujemy
                świadomość i reputacje Twojej marki. Stworzymy także Twoje logo oraz zajmiemy sie copywritingiem.
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
                Testy vulnerability to szczegółowa i profesjonalna analiza bezpieczeństwa Twojej strony internetowej, 
                która pozwala na zidentyfikowanie potencjalnych luk bezpieczeństwa. 
                Nasze testy opierają się na najnowszych metodach i narzędziach branżowych, 
                aby zapewnić najbardziej kompleksowe i dokładne wyniki.
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
          <button className={styles.buttonContact}><div>&nbsp;&nbsp; Skontaktuj się z nami po darmową wycenę &nbsp;&nbsp;</div></button>
        </Link>
      </div>

      <div className={styles.whoAreWeBackground}
        style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/light.png'})`}}>        
        {/* <div className={styles.thinkGap}></div> */}

        {/* <div className={styles.howWeWorkSection}> */}
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
                    desc='Najpierw, musimy zrozumieć Twój projekt, aby móc spełnić Twoje oczekiwania.
                      Przygotujemy dokładną wycenę i oszacujemy potrzebny czas na realizację.'
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
                    desc='Zaplanujemy naszą pracę, zidentyfikujemy możliwe wyzwania i upewnimy się, 
                      że możliwe jest spełnienie wszystkich wymagań.
                      Zaprojektujemy Twoją aplikację i przygotujemy architekturę systemu.'
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
                    desc='Powołamy do życia Twoją aplikację, tworząc front-end i back-end.
                      Zadbamy o jej bezpieczeństwo oraz upewnimy się, że aplikacja działa zgodnie z założeniami.'
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
                  <Cards className={styles.gh} title='Wdrożenie i utrzymanie' cardImgId='icon4'
                    desc='Kiedy Twoja aplikacja będzie gotowa, zostanie uruchomiona i będzie utrzymywana. 
                      Jeśli będzie to planowane, opracujemy dodatkowe funkcje.'
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



          

          {/* 
          
          Zbudować wybitny zespół ekspertów, który poradzi sobie z każdym wyzwaniem

          Traktować każdego klienta jako część zespołu

          Rozwijaj tylko te projekty, w które wierzymy

          Traktujemy każdy projekt - mały czy duży - jako równie ważny

          Proponuj ulepszenia i przyczyniaj się do sukcesu projektu

          Znajdź czas dla klientów, kiedy tylko tego potrzebują

          Wkładamy całe serce w to, co robimy

          Poszerzamy naszą wiedzę i dzielimy się nią z klientami

          Bądź dumny z tego, co dostarczamy 
          
          */}

          


        <div className={styles.whoAreWeSection}>
          <h1 data-aos="fade-down">Kim jesteśmy?</h1>
          <div className={styles.lines} data-aos="fade-left">
            <div className={styles.FirstLine}></div>
            <div className={styles.SecondLine}></div>
            <div className={styles.ThirdLine}></div>
          </div>
          <p className={styles.whoAreWeDesc}>
            Cometweb założone zostało przez trójkę przyjaciół znających się od dzieciństwa, kochających kodowanie i projektowanie
            stron internetowych. Razem ukończyliśmy politechnikę Gdańską, po czym latami w największych korporacjach zdobywaliśmy doświadczenie, 
            które teraz wykorzystujemy w budowaniu silnej pozycji w Internecie naszych klientów. 
          </p>

          <div className={styles.lineGap}></div>

          <p className={styles.whoAreWeDesc}>
            W Cometweb rozumiemy jak ważna jest silna obecność w sieci w dzisiejszym cyfrowym świecie. 
            Dlatego też ściśle współpracujemy z naszymi klientami, aby zrozumieć ich cele i wizje, a następnie przełożyć 
            je na stronę internetową, która dokładnie reprezentuje ich markę i napędza wyniki.
            Wykorzystujemy najnowsze technologie i trendy w projektowaniu, aby tworzyć strony internetowe, które są nie 
            tylko atrakcyjne wizualnie, ale również funkcjonalne i przyjazne dla użytkownika.
          </p>

          <div className={styles.lineGap}></div>

          <p className={styles.whoAreWeDesc}>
            Niezależnie od tego, czy chcesz uruchomić nową stronę internetową, odświeżyć istniejącą, czy poprawić swoją 
            strategię marketingową online, posiadamy wiedzę i doświadczenie, które pomogą Ci zwiększyć zyski i odnieść sukces.
          </p>
        </div>

        <div className={styles.ourValuesSection}>
          <p className={styles.footerColumn}>
            <FaAngleRight />  Tworzymy unikalne i wyróżniające się na tle konkurencji projekty
          </p>

          <p className={styles.footerColumn}>
            <FaAngleRight />  Skupiamy się na Twoich potrzebach, jasna i skuteczna komunikacja jest niezbędna, aby być pewnym, że spełnimy wszystkie Twoje wymagania
          </p>

          <p className={styles.footerColumn}>
            <FaAngleRight />  Pracujemy w zespole ekspertów, którzy poradzą sobie z każdym zadaniem i jak najszybciej dostarczą Ci gotową aplikację
          </p>

          <p className={styles.footerColumn}>
            <FaAngleRight />  Dbamy o każdy szczegół, aby każdy aspekt strony internetowej działa poprawnie i spełniał Twoje wymagania
          </p>

          <p className={styles.footerColumn}>
            <FaAngleRight />  Stale się rozwijamy, jesteśmy na bieżąco z najnowszymi trendami i technologiami
          </p>

          <p className={styles.footerColumn}>
            <FaAngleRight />  Każdy projekt - mały czy duży - traktujemy jako równie ważny
          </p>

          <p className={styles.footerColumn}>
            <FaAngleRight />  Wkładamy całe serce w to co robimy, jesteśmy dumnie z aplikacji, które dostarczamy
          </p>
        </div>

      </div>

      {/* //--------------------------------------------------------// */}
      {/* //------------------------ FOOTER ------------------------// */}
      {/* //--------------------------------------------------------// */}

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
    </>
  );
};

export default Home;