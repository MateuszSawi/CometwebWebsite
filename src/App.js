import Header from './components/Header/Header';
import Container from './components/Container/Container';
import Home from './components/Home/Home';
import WebDesign from './components/WebDesign/WebDesign';
import Smm from './components/Smm/Smm';
import Contact from './components/Contact/Contact';
import CyberSecTests from './components/CyberSecTests/CyberSecTests';
import { Routes, Route } from 'react-router-dom';

const App = () => {
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