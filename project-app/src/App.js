import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {Form, Button, Nav, Col, Container, Row} from 'react-bootstrap'
import './App.css';

class App extends React.Component { 

  login = {
    username : {
      value : "",
      valid : false,
    },
    email: {
      value : "",
      valid : false
    },
    password: {
      value : "",
      valid : false
    },
    rpassword: {
      value : "",
      valid : false
    }
  };

  userChange = event => {
    if(event.target.value !== ""){
      this.login.username.valid = true;
      event.target.className = "is-valid form-control";
    }else{
      this.login.username.valid = false;
      event.target.className = "is-invalid form-control";
    }
  };

  emailChange = event => {
    var expreg = new RegExp("^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])$");
    var OK = expreg.test(event.target.value);
    if(event.target.value !== "" && OK){
      this.login.email.valid = true;
      event.target.className = "is-valid form-control";
    }else{
      this.login.email.valid = false;
      event.target.className = "is-invalid form-control";
    }
  }

  passChange = event => {
    console.log(event.target.value)
    var expreg = new RegExp("(([A-Z]+)([a-z]+)([0-9]+)){8,16}");
    var OK = expreg.test(event.target.value);
    console.log(event.target.value)
    if(event.target.value !== "" && OK){
      this.login.password.valid = true;
      event.target.className = "is-valid form-control";
    }else{
      this.login.password.valid = false;
      event.target.className = "is-invalid form-control";
    }
  }
  
  render(){
    return (
      <div>
      <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">WikiFayrus</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#cursos">Cursos</Nav.Link>
        <Nav.Link href="#glosario">Glosario</Nav.Link>
        <Nav.Link href="#contactanos">Contactanos</Nav.Link>
      </Nav>
      <Form inline>
        <Button variant="outline-info">Iniciar sesión</Button>
        <Nav.Link href="#contactanos">o Regístrarse</Nav.Link>
      </Form>
      </Navbar>

      <Container>
        <Row margin="50px"> 
            
        </Row>
        <Row>
          <Col sm={8}></Col>  
          <Col sm={4}>
            <Form>
                <hr></hr>
                <Form.Group as={Col} controlId="Uuser">
                  <Form.Control 
                  placeholder="Usuario"
                  onChange={this.userChange}
                  className={this.login.username.valid ? "is-valid" : "is-invalid"}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="Uemail">
                  <Form.Control
                  type="email"
                  placeholder="Correo"
                  onChange={this.emailChange}
                  className={this.login.email.valid ? "is-valid" : "is-invalid"}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="Upassword">
                  <Form.Control
                  type="password"
                  placeholder="Contraseña"
                  onChange={this.passChange}
                  className={this.login.password.valid ? "is-valid" : "is-invalid"}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="Urpassword">
                  <Form.Control type="password" placeholder="Repite tu contraseña" />
                </Form.Group>

                <Form.Group as={Col} controlId="b">
                  <Button variant="primary" type="submit">
                    Registrarse
                  </Button>  
                </Form.Group>
                
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
    );
  }
}

export default App;
