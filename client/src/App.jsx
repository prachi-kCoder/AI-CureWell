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
import About from "./components/About.jsx";
import Developer from "./components/Developer.jsx";
import Contact from "./components/Contact.jsx";
import LatestAdvances from "./components/pages/LatestAdvances.jsx";
import ViewPublication from "./components/pages/ViewPublication.jsx";
import ChatBot from "./components/chatbot/ChatBot.jsx";
import DashboardSummary from "./components/Dashboard/DashboardSummary.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx"
import SignUp from "./components/SignUp.jsx";
import Login from "./components/Login.jsx";
import { Box } from '@mui/material'; // Import MUI Box for Flexbox layout

function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <Router>
      <Header /> {/* Common across all routes */}
      <Box sx={{ flexGrow: 1 }}>
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
          <Route path="/about" element={<About />} />
          <Route path="/developer" element={<Developer />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/latest-advances" element={<LatestAdvances/>} />
          {/* <Route path="/publications/:id" exact> */}
          {/* Render ViewPublication by extracting the ID from the URL */}
          {/* {({ match }) => <ViewPublication publicationId={match.params.id} />} */}
        {/* </Route> */}
        <Route path="/publications/:id" element={<ViewPublication />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/chatbot" element={<ChatBot />} />
        <Route path="/dashboard-summary" element={<DashboardSummary />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} /> 

      </Routes>
      </Box>    
      <Footer /> {/* Footer appears on all routes */}
    </Router>
    </Box>
  );
}

export default App;
