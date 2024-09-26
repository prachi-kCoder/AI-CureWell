import "./App.css";
import React from 'react';
import Header from './components/shared/Header';
import Banner from './components/shared/Banner';
import Features from './components/Features';
import SymptomChecker from './components/pages/SymptomChecker';
import DiseaseCure from './components/pages/DiseaseCure';
import LocateDoctor from './components/pages/LocateDoctor';
import Footer from './components/shared/Footer.jsx'; // Add your Footer component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header /> {/* Common across all routes */}
      <Routes>
        {/* Define your routes here */}
        <Route
          path="/"
          element={
            <>
              <Banner /> {/* Banner only on home route */}
              <Features /> {/* Features only on home route */}
            </>
          }
        />
        <Route path="/symptom-checker" element={<SymptomChecker />} />
        <Route path="/disease-cure" element={<DiseaseCure />} />
        <Route path="/locate-doctor" element={<LocateDoctor />} />
      </Routes>
          
      <Footer /> {/* Footer appears on all routes */}
    </Router>
  );
}

export default App;
