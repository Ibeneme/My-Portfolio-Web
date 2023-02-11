

import React from 'react';
import { Routes, Route} from "react-router-dom"
import { Body } from './components/body';
import { Contact } from './components/contact';
import { Portfolio } from './components/Portfolio';

function App() {
  return (
    <React.Fragment>
        <Routes>
            <Route path = "/" element={<Body />} />
            <Route path = "/Contact-Me" element={<Contact />} />
            <Route path = "/Portfolio" element={<Portfolio />} />
        </Routes>
      </React.Fragment>
  );
}

export default App;