import './App.css';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import { useEffect } from 'react';
import { CylinderCarousel } from './components/pages/variant-1/cylinder-carousel';
import { AboutPage } from './components/pages/about';
import { ProcessPage } from './components/pages/process';
import { PortfolioPage } from './components/pages/portfolio';
import { Navbar } from './components/navbar';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function BodyClassSetter() {
  const location = useLocation();

  useEffect(() => {
    document.body.classList.remove('demo-1');

    if (location.pathname === '/') {
      document.body.classList.add('demo-1');
    }
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <BodyClassSetter />
      <Navbar />
      <main id="main-content" className="" role="main">
        <Routes>
          <Route path="/" element={<CylinderCarousel />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
