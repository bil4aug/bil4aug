import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
class NF404 extends Component {
  
  render() {
    return(
      <div>
      <Grid>
        <Row className="show-grid">
        <Col sm={12} xs={12} md={12} lg={12} >
        <header className="App-header">
      
      <h1 className="App-title">Page Not Found</h1>
      
    </header>
    <p className="App-intro">
      This page you are looking for cannot be found.
    </p>
    </Col>
    </Row>
    </Grid>
    </div>
    )
  }
}

export default NF404;
