import React, { Component } from 'react';
import logo from './loader.svg';
import {Grid, Row, Col,Label, Table,ProgressBar,Glyphicon} from 'react-bootstrap';

export default class Details extends Component {
    constructor(props){
      super(props);
      this.state = {'contacts':[], 'fetching':true};      
    }
    componentWillUnmount() {
        window.removeEventListener('hashchange',() => {
            this.setState({'fetching':true});
            fetch('http://profiler.markinson.com.au/api/Customer')
        .then((res) => res.json())
        .then((something)=> { return something.map((val,index,array)=>{return val.companyName})})
        .then((something)=>{this.setState({"contacts":something.filter((val,id,array)=>{ return val.toLowerCase().includes(this.props.word) && array.indexOf(val)===id})}); return this.state.contacts;})
        .then((something)=>{this.setState({"contacts":something.sort(),"fetching":false}); return this.state.contacts;})
        .catch((reason)=>{ window.location.hash = "NotFound";});      
    });

    }
    componentDidMount()
  {
    fetch('http://profiler.markinson.com.au/api/Customer')
    .then((res) => res.json())
    .then((something)=> { return something.map((val,index,array)=>{return val.companyName})})
    .then((something)=>{this.setState({"contacts":something.filter((val,id,array)=>{ return val.toLowerCase().split(' ').indexOf(this.props.word) >= 0 && array.indexOf(val)===id})}); return this.state.contacts;})
    .then((something)=>{this.setState({"contacts":something.sort(),"fetching":false}); return this.state.contacts;})
    .catch((reason)=>{ window.location.hash = "NotFound";});
    window.addEventListener('hashchange', () => {
        this.setState({'fetching':true});
        fetch('http://profiler.markinson.com.au/api/Customer')
    .then((res) => res.json())
    .then((something)=> { return something.map((val,index,array)=>{return val.companyName})})
    .then((something)=>{this.setState({"contacts":something.filter((val,id,array)=>{ return val.toLowerCase().split(' ').indexOf(this.props.word) >= 0 && array.indexOf(val)===id})}); return this.state.contacts;})
    .then((something)=>{this.setState({"contacts":something.sort(),"fetching":false}); return this.state.contacts;})
    .catch((reason)=>{ window.location.hash = "NotFound";});      
})
        
}

  isOutOfScope = (word) => {
    if(this.state.contacts.length <= 0 || this.isCommon(word))
    {
      return true;
    }
  }
  isCommon = (word) =>{
    if(word.length <= 2 || word === "where" || word === "what" || word === "whether" || word === "when" || word === "never" || word === "and" || word === "are" || word === "the" || word === "their" || word === "there" || word === "this" || word === "that" || word === "what" || word === "ltd" || word === "limited" || word === "non" || word === "here" || word === "under" || word === "down" || word === "left" || word === "right" || word === "near" || word === "corp" || word === "corp." || word === "inc" || word === "inc.")
    {
      return true;
    }
    return false; 
  }
    render()
    {
        var loader = <img src={logo} className="App-logo" alt="logo" />;
        var loader1 = <tr><td colSpan="3"><img src={logo} className="App-logo" alt="logo" /></td></tr>;
        return (
            <Grid>
            <Row className="show-grid">
            <Col sm={12} xs={12} md={12} lg={12} >
            <header className="App-header">
          
          
          {this.state.fetching?loader:!this.isOutOfScope(this.props.word)?(<h1 className="App-title">Word {this.props.word}</h1>):<h1 className="App-title">Page Not Found</h1>}
        </header>
        
            </Col>
              </Row>
              <Row className="show-grid">
            <Col sm={12} xs={12} md={12} lg={12} >
            {this.state.fetching?<Table striped bordered responsive hover><tbody>{loader1}</tbody></Table>
            :this.isOutOfScope(this.props.word)?null:
                  <Table striped bordered responsive hover>
                  
                  <thead>
                      <tr>
                          <th colSpan="3">Company Names includes "{this.props.word}" in them</th>
                      </tr>
                      <tr>
                      <th rowSpan="2">Company Name</th>
                      <th colSpan="2">Other Words</th>
                      
                      </tr>
                      <tr><th>Words</th><th>Percenrtage of Other Words</th></tr>
                      </thead>
                      <tbody>
                          {this.state.contacts.map((val,id,array)=>{
                              return (<tr key={val}><td>{val}</td><td>{val.split(' ').map((value,index,words)=>{
                                  if(value.toLowerCase() !== this.props.word && !this.isCommon(value.toLowerCase())){
                                       return (<div key={index}><a href={`#Details/${value.toLowerCase()}`}><Label bsStyle="info">{value}</Label></a></div>);
                                    }})}</td><td><ProgressBar now={Number(Number(val.split(' ').filter((val,index,array)=>{return val.toLowerCase() !== this.props.word && !this.isCommon(val.toLowerCase())}).length/val.split(' ').filter((val,index,array)=>{return !this.isCommon(val.toLowerCase())}).length * 100).toFixed(2))} label={`${Number(val.split(' ').filter((val,index,array)=>{return val.toLowerCase() !== this.props.word && !this.isCommon(val.toLowerCase())}).length/val.split(' ').filter((val,index,array)=>{return !this.isCommon(val.toLowerCase())}).length * 100).toFixed(2)}%`} /></td></tr>);
                          })
                          }
                          
                          </tbody>
                      <tfoot>
                          <tr>
                          <th>Total Companies</th><td>{this.state.contacts.length}</td>
                          </tr>
                          </tfoot>
                  </Table>}
                  </Col>
              </Row>
              <Row className="show-grid">
            <Col className="text-center" sm={12} xs={12} md={12} lg={12} >
            <div><a href="#" className="btn btn-info"><Glyphicon glyph="circle-arrow-left" /> Back To Home </a></div>

            </Col>
              </Row>
        </Grid>
        );
    }
}