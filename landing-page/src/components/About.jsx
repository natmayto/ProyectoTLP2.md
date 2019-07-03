import React, { Component } from 'react'
import { Grid, Col, Image } from 'react-bootstrap';
import './About.css';

export default class Introducción extends Component {
  render() {
    return (
      <div>
        <Image src="assets/navbar.jpg" className="header-image" />
        <Grid>
          <Col xs={12} sm={8} smOffset={2}>
            <Image src="assets/300.jpg" className="about-profile-pic" rounded />
            <h3>Introducción</h3>
            <p>Se pretende generar una página web enfocada a temas de seguridad informáticas, el sitio web estará dividido en diferentes componentes de la siguiente manera:
<p>1.	Home
En esta sección el usuario podrá encontrar cada uno de los artículos de interés. </p>
<p>2.	Cursos
Aquí el usuario puede seleccionar un curso de su interés y al darle clic será redirigido hacía otro site.</p>
<p>3.	Wiki
El usuario encontrara el significado de diferentes términos usado en toda la página y ademas propios del campo de la seguridad informática.</p>
<p>4.	Contáctanos
El usuario encontrara información sobre los encargados del proyecto y como comunicarse con ellos.</p>
</p>
          </Col>
        </Grid>
      </div>
    )
  }
}
