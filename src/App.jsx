import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar';
import Header from './components/header';
import AboutSection from './components/about';
import ImageCollection from './components/image_collection';
import Contact from './components/contacts';
import Footer from './components/footer';

// Portfolio Components
import Food from './components/portfolio/1_food';
import Product from './components/portfolio/2_product';
import Fashion from './components/portfolio/3_fashion';
import Car from './components/portfolio/4_car';
import Gym from './components/portfolio/5_gym';
import Concerts from './components/portfolio/6_concerts';
import Property from './components/portfolio/7_property';
import Weddings from './components/portfolio/8_weddings';
import Meetings from './components/portfolio/9_meetings';
import Party from './components/portfolio/10_party';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          {/* Main Home Page */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <AboutSection />
                <ImageCollection />
                <Contact />
              </>
            }
          />

          {/* Portfolio Detail Pages */}
          <Route path="/portfolio/food" element={<Food />} />
          <Route path="/portfolio/product" element={<Product />} />
          <Route path="/portfolio/fashion" element={<Fashion />} />
          <Route path="/portfolio/car" element={<Car />} />
          <Route path="/portfolio/gym" element={<Gym />} />
          <Route path="/portfolio/concerts" element={<Concerts />} />
          <Route path="/portfolio/property" element={<Property />} />
          <Route path="/portfolio/weddings" element={<Weddings />} />
          <Route path="/portfolio/meetings" element={<Meetings />} />
          <Route path="/portfolio/party" element={<Party />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
