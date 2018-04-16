import React, { Component } from 'react';
import {Grid, Row, Col,Panel} from 'react-bootstrap';
class Document extends Component {
  
  render() {
    return(
      <div>
      <Grid>
        <Row className="show-grid">
        <Col sm={12} xs={12} md={12} lg={12} >
        <header className="App-header">
      
      <h1 className="App-title">Documentation of the solution</h1>
      
    </header>
    </Col>
    </Row>
    <Row className="show-grid">
        <Col sm={12} xs={12} md={6} lg={6} >
    <Panel>
      <Panel.Heading><h4><b>Step 1</b></h4>(Fething data from api)</Panel.Heading>
      <Panel.Body>
        <p>A component is designed name Data which fetches the data from the api and then process it after processing displays it in a well formatted table. The component extends the React Component Class. After the component is mounted successfully it starts fetching data from api while showing a loader place holder. After fetching the data it converts into an array of json objects and then store it into an array inside the Component's state.</p>
      </Panel.Body>
      </Panel>
      </Col>
      
        <Col sm={12} xs={12} md={6} lg={6} >
      <Panel>
      <Panel.Heading><h4><b>Step 2</b></h4>(Reading Words From Company Field)</Panel.Heading>
      <Panel.Body>
        <p>After fetching and saving data the script continues to seperate words from company fields and check the following conditions:</p>
        <ul>
            <li>The words is greater than two characters loong.</li>
            <li>The word is not a common word in like and, is, am, are, this, that etc.</li>
          </ul>
          <p>After extracting a list of words. it saves the list of words into the state along with the full Company Name.</p>
      </Panel.Body>
      </Panel>
      </Col>
      </Row>
      <Row className="show-grid">
        <Col sm={12} xs={12} md={6} lg={6} >
      <Panel>
      <Panel.Heading><h4><b>Step 3</b></h4>(Sorting Words alphabetically)</Panel.Heading>
      <Panel.Body>
        <p>In the step 3 the script confirms the words taken from the company names are sorted alphabetically.</p>
      </Panel.Body>
      </Panel>
      </Col>
        <Col sm={12} xs={12} md={6} lg={6} >
      <Panel>
      <Panel.Heading><h4><b>Step 4</b></h4>(Verifying Each Word is taken only once from one name)</Panel.Heading>
      <Panel.Body>
        <p>In the step 4 the script confirms that by each word is taken once from one company name by removing duplicating enteries.</p>
      </Panel.Body>
      </Panel>
      </Col>
      </Row>
      <Row className="show-grid">
        <Col sm={12} xs={12} md={6} lg={6} >
      <Panel>
      <Panel.Heading><h4><b>Step 5</b></h4>(Count the Occurance of the words)</Panel.Heading>
      <Panel.Body>
        <p>so the resulting words list have unique words associated to the unique company names. We can simply count each words occurences. The script also does the same. After counting occurences of the words it saves unique in the words with their occurences in an array and replaces the words array in the state with this newly created array.</p>
      </Panel.Body>
      </Panel>
      </Col>
        <Col sm={12} xs={12} md={6} lg={6} >
      <Panel>
      <Panel.Heading><h4><b>Step 6</b></h4>(Sorting the results)</Panel.Heading>
      <Panel.Body>
        <p>Now we have word with their frequency of occurance in the company name field. The script continues o sort them them in the following order:</p>
        <ol>
          <li>The word with the highest frequency of occurance comes first</li>
          <li>The two words with th same frequency come in alphabetic order</li>
          </ol>
      </Panel.Body>
      </Panel>
      </Col>
      </Row>
      <Row className="show-grid">
        <Col sm={12} xs={12} md={6} lg={6} >
      <Panel>
      <Panel.Heading><h4><b>Step 7</b></h4>(Displaying the results)</Panel.Heading>
      <Panel.Body>
        <p>Now our script targets the render event again to replace the pre loader with our calculated analytic.</p>
        <p>The render function shows only the top 5 of our calculated results(as required condition).</p>
      </Panel.Body>
      </Panel>
      </Col>
        <Col sm={12} xs={12} md={6} lg={6} >
      <Panel>
      <Panel.Heading><h4><b>Additional Information</b></h4>(Styling Info)</Panel.Heading>
      <Panel.Body>
        <p>In addition to make the User Interface of the analytics good following libraries are used:</p>
        <ul><li>React-Bootstrap v3.3.7 </li></ul>
      </Panel.Body>
      </Panel>
      </Col>
      </Row>
</Grid>
    </div>
    )
  }
}

export default Document;
