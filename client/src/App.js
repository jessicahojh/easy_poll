import React from 'react';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';

import Navbar from './components/Navbar';
import Poll from './components/Poll';
import CreateForm from './components/CreateForm';

const App = () => {
  return (

      <Router>
  
          <Navbar/>
          <CreateForm/>
          <Poll/>

      </Router>

  );
}

export default App;
