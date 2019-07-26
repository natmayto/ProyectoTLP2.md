import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './News.css';

export default class Ventajas extends Component {
  render() {
    return (
      <div>
        <Image src="assets/navbar.jpg" className="header-image" />
        <Grid>
          <h2>Ventajas</h2>
          <Row>
            <Col xs={12} sm={8} className="main-section">
              <p>- Capacita a la población general, sobre las nuevas tecnologías y amenazas que puedan traer.</p>
              <p>- Asegura la integridad y privacidad de la información de un sistema informático y sus usuarios.</p>
              <p>- Medidas de seguridad que evitan daños y problemas que pueden ocasionar intrusos.</p>
              <p>- Crea barreras de seguridad que no son más que técnicas, aplicaciones y dispositivos de seguridad, como corta juegos, antivirus, anti espías, encriptación de la información y uso de contraseñas protegiendo información y equipos de los usuarios.</p>

            </Col>
            <Col xs={12} sm={4} className="sidebar-section">
              <Image src="assets/IMG.jpg" />
              <p>La página web se trata básicamente para que la persona tenga un mayor conocimientos y mejor dominio de la seguridad informática y el buen manejo de uso de datos en la web</p>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
