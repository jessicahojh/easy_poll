import React from 'react';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';

import Navbar from './components/Navbar';
import Poll from './components/Poll';
import CreateForm from './components/CreateForm';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const App = () => {
  return (

      <Router>
        <Navbar/>
        <Container>
          <Row>
            <Col></Col>
            <Col xs={6}>
              <CreateForm/>
            </Col>
            <Col></Col>
          </Row>

          <Poll/>

        </Container>
      </Router>

  );
}

export default App;
