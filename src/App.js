import Header from './components/Header/Header';
import Container from './components/Container/Container';
import Home from './components/Home/Home';
import WebDesign from './components/WebDesign/WebDesign';
import Smm from './components/Smm/Smm';
import Contact from './components/Contact/Contact';
import CyberSecTests from './components/CyberSecTests/CyberSecTests';
import { Routes, Route } from 'react-router-dom';
// import { response } from 'express';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const App = () => {

  // const firebaseConfig = {
  //   apiKey: "AIzaSyCr-5acwjvQnv3gp74jECHl4xn3cQA2-GQ",
  //   authDomain: "cometweb-e7cd9.firebaseapp.com",
  //   projectId: "cometweb-e7cd9",
  //   storageBucket: "cometweb-e7cd9.appspot.com",
  //   messagingSenderId: "586660593052",
  //   appId: "1:586660593052:web:b474b18bc8b8c028309c59",
  //   measurementId: "G-B39436F2VB"
  // };
  
  // // Initialize Firebase
  // const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);

  return (
    <>
      <Header />
      <Container>
        <Routes>
          <Route path="/"
            element={<Home />} />
          <Route path="/tworzeniestroniaplikacjiinternetowych"
            element={<WebDesign />} />
          <Route path="/socialmediamarketing"
            element={<Smm />} />
          <Route path="/vulnerabilitytesty"
            element={<CyberSecTests />} />
          <Route path="/contact"
            element={<Contact />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;