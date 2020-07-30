import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import LandingPage from './components/LandingPage';
import Register from './components/auth/Register';
import Navbar from './components/Navbar';
import Discover from './components/Discover';
import OtherProfiles from './components/otherUsers/OtherProfiles';
import Search from './components/Search';
import QuestionForm from './components/QuestionForm';
import Notifications from './components/Notifications';
import Profile from './components/Profile';
import About from './components/About';
import Logout from './components/auth/Logout';
import Account from './components/Account';

import Container from 'react-bootstrap/Container';

import { autoLogin } from './actions/userActions';

import './App.css';

const App = () => {

  const isAuthenticated = useSelector((state) => state.users.isAuthenticated);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(autoLogin());
  }, []);

  return (

      <Router>
        <Fragment>
          <Container>
            {isAuthenticated ? 
              <>
                <Navbar/>
                <Switch>
                  <Route exact path='/about' component={About}/>
                  <Route exact path='/logout' component={Logout}/>
                  <Route exact path='/account' component={Account}/>
                  <Route exact path='/discover' component={Discover}/>
                  <Route exact path='/:username' component={OtherProfiles}/>
                  <Route exact path='/search' component={Search}/>
                  <Route exact path='/add' component={QuestionForm}/>
                  <Route exact path='/notification' component={Notifications}/>
                  <Route exact path='/profile' component={Profile}/>
                </Switch>
              </>
            :
              <>
                <Switch>
                  <Route exact path='/' component={LandingPage}/>
                  <Route exact path='/register' component={Register}/>
                </Switch>
              </>
            }
          </Container>
        </Fragment>
      </Router>
  );
}

export default App;
