import React from 'react';
import Header from './components/header';
import Navbar from './components/navbar';
import ImageCollection from './components/image_collection';
import Footer from './components/footer';
import AboutSection from './components/about';
import Contact from './components/contacts'
import './App.css';
function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      
      <ImageCollection />
      <AboutSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;