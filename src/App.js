import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header.js';
import Aside from './components/Aside/Aside.js';
import Home from './Pages/Home/Home.js';
import ProfilPage from './Pages/UserPage/UserPage.js';
import EmptyPage from './Pages/EmptyPage/EmptyPage.js';
import Error from './Pages/Error/Error.js';

import "../src/utils/style/GlobalStyle.css"

  //différentes routes et chemin des differentes pages du site
  function App() {
    return (
      <BrowserRouter>
        <Header />
        <Aside />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ProfilPage/:userId" element={<ProfilPage />} />  
          <Route path="/reglage" element={<EmptyPage />} />
          <Route path="/communaute" element={<EmptyPage />} />
          <Route path="/yoga" element={<EmptyPage />} />
          <Route path="/natation" element={<EmptyPage />} />
          <Route path="/velo" element={<EmptyPage />} />
          <Route path="/musculation" element={<EmptyPage />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    );
  }
  
  export default App;
