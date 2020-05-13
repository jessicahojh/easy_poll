import React, { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Login from './components/auth/Login';
import Logout from './components/auth/Logout';
import Register from './components/auth/Register';

import Container from 'react-bootstrap/Container';

import { autoLogin } from './actions/userActions';

import './App.css';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(autoLogin());
  }, []);

  return (
    
      <Router>
        <Fragment>
          <Navbar/>
          <Container>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/about' component={About}/>
              <Route exact path='/login' component={Login}/>
              <Route exact path='/logout' component={Logout}/>
              <Route exact path='/register' component={Register}/>
            </Switch>
          </Container>
        </Fragment>
      </Router>

  );
}

export default App;
