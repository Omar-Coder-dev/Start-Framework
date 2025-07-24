import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import StartFramework from './Pages/StartFramework';
import About from './Pages/About';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';
import './App.css';

export default function App() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path === '/about') document.title = 'About | Start Framework';
    else if (path === '/portfolio') document.title = 'Portfolio | Start Framework';
    else if (path === '/contact') document.title = 'Contact | Start Framework';
    else if (path === '/') document.title = 'Start Framework';
    else document.title = '404 | Start Framework';
  }, [location]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<StartFramework />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />

        {/* 404 Page */}
        <Route
          path="*"
          element={
            <div className="container text-center py-5 my-5">
              <h1 className="display-4 fw-bold text-danger">404 - Page Not Found</h1>
              <p className="lead">Sorry, the page you're looking for doesn't exist.</p>
              <Link to="/" className="btn btn-primary mt-3">Back to Home</Link>
            </div>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}
