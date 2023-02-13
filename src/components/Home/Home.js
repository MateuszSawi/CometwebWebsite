import styles from './Home.module.scss';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";
// import 'font-awesome/css/font-awesome.min.css';

const Home = () => {

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  return (
    <>
    <div className={styles.servicesBack} style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/websbackground.png'})`}}>
      <div className={styles.imageContainer}
        // style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/homepageimg.jpeg'})`}}
      >
        <img className={styles.waveBackground} alt="wavebackground" src={`${process.env.PUBLIC_URL}/wavebackground.png`}></img>
        <img className={styles.wave} alt="wave" src={`${process.env.PUBLIC_URL}/wave.png`}></img>
        <div className={styles.innerDiv}>
          <img className={styles.logo} alt="CometwebLogo" src={`${process.env.PUBLIC_URL}/Cometweb/logocut.png`}></img>
          <h3 className={styles.companyDescription}>Tworzymy Twoją przyszłość w Internecie</h3>
        </div>
      </div>

      <div className={styles.phoneTab}>
        <div className={styles.hoverLinePhone}>
          <div className={styles.hoverInnerPhone}>
            <p className={styles.number}>
              &nbsp;&nbsp; +48 <strong>690 688 835</strong>
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

      <div className={styles.aboutUsBackground} >
        <div className={styles.aboutUsSection} >
        {/* <div className={styles.aboutUsLabel}> */}
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
        {/* </div> */}
      </div>

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
        <Link to="/contact">
          <button className={styles.buttonContact}><div>&nbsp;&nbsp; Skontaktuj się z nami po darmową wycenę &nbsp;&nbsp;</div></button>
        </Link>
      </div>

      <div className={styles.whoAreWeBackground}
        style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/light.png'})`}}>
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

        <div className={styles.thinkGap}></div>

        <div className={styles.think}
        // style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/wycena.jpg'})`}}
        ></div>

        <div className={styles.thinkGap}></div>

        <div className={styles.howWeWork}>












        </div>

        <div className={styles.ourValuesSection}>















          
        </div>
      </div>

      <footer className={styles.footerSection}>
        <div className={styles.footerContainer}>
          <p className={styles.footerColumnOne}>
            Niezależnie od tego, czy chcesz uruchomić nową stronę internetową, odświeżyć istniejącą, czy poprawić swoją 
            strategię marketingową online, posiadamy wiedzę i doświadczenie, które pomogą Ci zwiększyć zyski i odnieść sukces.
          </p>

          <p className={styles.footerColumnTwo}>
            Niezależnie od tego, czy chcesz uruchomić nową stronę internetową, odświeżyć istniejącą, czy poprawić swoją 
            strategię marketingową online, posiadamy wiedzę i doświadczenie, które pomogą Ci zwiększyć zyski i odnieść sukces.
          </p>

          <p className={styles.footerColumnThree}>
            Niezależnie od tego, czy chcesz uruchomić nową stronę internetową, odświeżyć istniejącą, czy poprawić swoją 
            strategię marketingową online, posiadamy wiedzę i doświadczenie, które pomogą Ci zwiększyć zyski i odnieść sukces.
          </p>
          <i class="fa-solid fa-shield-halved"></i>
          <a href="#" id="z"><FontAwesomeIcon className={styles.fontawesomeIcon} icon="fa-brands fa-twitter" /></a>
          <FontAwesomeIcon icon="fa-solid fa-shield-halved" />
          
        </div>
      </footer>
    </>
  );
};

export default Home;