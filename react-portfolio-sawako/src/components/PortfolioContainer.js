import React from 'react';
import Header from './headerComponents/Header';
import Footer from './footerComponent/Footer';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const PortfolioContainer = () => {
    return (
        <Router>
            <div className="PortfolioContainer">
                <Header />
                <Routes>
                    <Route path='/react-portfolio' element={<AboutMe />} />
                    <Route path='/portfolio' element={<Portfolio />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/resume' element={<Resume />} />

                </Routes>
                <Footer />

            </div>
        </Router>
    )
}

export default PortfolioContainer;