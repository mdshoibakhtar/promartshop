import 'bootstrap/dist/css/bootstrap.min.css';

import { Header } from './components/header/Header';

import "./assets/styles/style.css"
import "./assets/styles/mediaqurey.css"
import { Navigate, Route, Routes } from 'react-router-dom';
import Comingpages from './Pages/coming-pages';
import React from 'react';
import { Electronic } from './components/electronicmain/Electronic';
function App() {
  return (
    <div>
      <div className='position-sticky z-index top-0'>
        <Header />
      </div>

      <Routes>
        <React.Fragment>
          <Route path={"/"} element={<Navigate to={"/electronics"} />} />
          <Route path="/electronics" element={<Electronic />} />
          <Route path="/comingpages" element={<Comingpages />} />
        </React.Fragment>
      </Routes>
    </div>
  );
}

export default App;
