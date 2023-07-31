import React from 'react';
import Header from './headerComponents/Header';
import Footer from './footerComponent/Footer';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';

const PortfolioContainer = () => {
    return (
        <Router>
            <div className="PortfolioContainer">
                <Header />
                <HelmetProvider>
                    <Routes>
                        <Route path='/react-portfolio/' element={<AboutMe />} />
                        <Route path='/react-portfolio/portfolio' element={<Portfolio />} />
                        <Route path='/react-portfolio/contact' element={<Contact />} />
                        <Route path='/react-portfolio/resume' element={<Resume />} />

                    </Routes>
                </HelmetProvider>
                <Footer />

            </div>
        </Router>
    )
}

export default PortfolioContainer;