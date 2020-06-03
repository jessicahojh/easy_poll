import React, { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Login from './components/auth/Login';
import Logout from './components/auth/Logout';
import Register from './components/auth/Register';
import Account from './components/Account';
import Search from './components/Search';
import QuestionForm from './components/QuestionForm';
import Notifications from './components/Notifications';
import Profile from './components/Profile';

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
          <Container>
          <Navbar/>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/about' component={About}/>
              <Route exact path='/login' component={Login}/>
              <Route exact path='/logout' component={Logout}/>
              <Route exact path='/register' component={Register}/>
              <Route exact path='/account' component={Account}/>
              <Route exact path='/search' component={Search}/>
              <Route exact path='/add' component={QuestionForm}/>
              <Route exact path='/notification' component={Notifications}/>
              <Route exact path='/profile' component={Profile}/>
            </Switch>
          </Container>
        </Fragment>
      </Router>

  );
}

export default App;
