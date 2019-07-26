import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h2>WikiFayrus</h2>
          <p>Descubre una forma de cómo aprender sobre la seguridad informática</p>
          <Link to="/about">
            <Button bsStyle="primary">Descubre Cómo</Button>
          </Link>
        </Jumbotron>

          
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/persona.jpg" circle className="profile-pic"/>
            <h3>Conoce nuestro proyecto educativo en Seguridad Informática, en la que te puede ayudar a guiarte en el mundo de la web y mejorar 
              los conocimientos tanto del software como el hardware para un mejor uso en cuanto en su seguridad.
            </h3>
          </Col>
          
       
      </Grid>
    )
  }
}
