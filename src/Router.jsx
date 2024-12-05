import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import MainPage from './pages/Main';
import SoeunPage from './pages/Soeun';
import YesungPage from './pages/Yesung';
import YoonsooPage from './pages/Yoonsoo';
import EunheePage from './pages/Eunhee';
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
        <Route path="/yesung" element={<YesungPage />} />
        <Route path="/yoonsoo" element={<YoonsooPage />} />
        <Route path="/eunhee" element={<EunheePage />} />
        <Route path="/studylist" element={<StudyListPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
