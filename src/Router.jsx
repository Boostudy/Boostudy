import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import MainPage from './pages/Main';
import SoeunPage from './pages/Soeun';
import StudyListPage from './components/StudyList/StudyList';

// Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

export default function Router() {
  return (
    <BrowserRouter>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/soeun" element={<SoeunPage />} />
        <Route path="/studylist" element={<StudyListPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
