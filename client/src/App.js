import React from 'react';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';

import Navbar from './components/Navbar';
import Poll from './components/Poll';

const App = () => {
  return (

      <Router>

          <Navbar/>
          <Poll/>

      </Router>

  );
}

export default App;
