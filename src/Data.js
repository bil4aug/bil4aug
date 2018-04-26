import React, { Component } from 'react';
import logo from './loader.svg';
import {Grid, Row, Col, Table,ProgressBar} from 'react-bootstrap';

export default class Data extends Component {
  constructor(){
    super();
    this.state = {'contacts':[],'words':[], 'loading':true, 'fetching':true};
  }
  
  componentDidMount()
  {
    fetch('http://profiler.markinson.com.au/api/Customer')
    .then((res) => res.json())
    .then((something) => {(something.map((item,index)=>{(item.companyName.split(' ')).map((item1,index)=>{this.addWord(item1,item.companyName)})})); this.setState({'contacts':something,'fetching':false})}).then((something)=> {this.setState ({"words": this.state.words.sort()})}).then((something)=>{
    var uniques = this.state.words.filter((val, id, array) => {
      return array.indexOf(this.state.words.find((el)=>{return el.split('%')[0] === val.split('%')[0]})) === id;  
   });
   
   var counts = [];
     uniques.forEach(element => {
      var cnt = 0;
       this.state.words.forEach(el1=>{
         if(element.split('%')[0] === el1.split('%')[0])
         {
           cnt++;
         }
       })
      counts.push([{"word":element.split('%')[0], "occ":cnt}]);
     });
     counts = counts.sort((a,b)=>{
      if(a[0].occ > b[0].occ)
       {return -1;}
       if(a[0].occ < b[0].occ)
       {
         return 1
       }
       if(a[0].word < b[0].word)
       {return -1;}
       if(a[0].word > b[0].word)
       {
         return 1
       }
       return 0;
    });
    this.setState({"words":counts,'loading':false});
   })
   .catch((reason)=>{ window.location.hash = "NotFound";});
    
  }
  
  addWord = (word, main)=>
  {
    word = word.toLowerCase()
     
    if(word.length > 2 && !this.isCommon(word))
    {
      
    this.state.words.push(word+"%"+main);
    }
  }

  isCommon = (word) => {
    if(word === "where" || word === "what" || word === "whether" || word === "when" || word === "never" || word === "and" || word === "are" || word === "the" || word === "their" || word === "there" || word === "this" || word === "that" || word === "what" || word === "ltd" || word === "limited" || word === "non" || word === "here" || word === "under" || word === "down" || word === "left" || word === "right" || word === "near")
    {
      return true;
    }
  }

  render() {
    var loader = <tr><td colSpan="4"><img src={logo} className="App-logo" alt="logo" /></td></tr>;
    var loader1 = <tr><td colSpan="9"><img src={logo} className="App-logo" alt="logo" /></td></tr>;

    return (
      
      
        
        <div>
          <Grid>
            <Row className="show-grid">
            <Col sm={12} xs={12} md={12} lg={12} >
            <header className="App-header">
          
          <h1 className="App-title">Contour Assessment</h1>
          <h3 className="App-title">Candidate : Muhammad Bilal Anjum(bil4aug@gmail.com)</h3>
        </header>
        <p className="App-intro">
          This app is for the recruitment test of Contour Software.
        </p>
            </Col>
              </Row>
              <Row>
              <Col sm={12} xs={12} md={12} lg={12} >
              <Table striped bordered responsive hover>
              <thead>
                <tr>
                  <th colSpan="4">5 Most commonly used words in 'Company Name' filed</th>
                  </tr>
                <tr>
                <th>Sr No.</th>
                <th>Word</th>
                <th>No of companies in which word is common</th>
                <th></th>
                </tr>
                </thead>
                <tbody>
                  { this.state.loading ? loader: null}
                {this.state.words.map((item,index)=>{
                    if(index < 5)
                    {
                    return <tr key={index}><td>{index+1}</td><td>{item[0].word}</td><td> <ProgressBar now={Number((item[0].occ/this.state.words.length* 100).toFixed(2))} label={`${item[0].occ}`} /></td><td><a href={`#Details/${item[0].word}`} className="btn btn-info">View List</a></td></tr>;
                    }
                  })}
                </tbody>
          </Table>
              </Col>
              </Row>
              <Row>
              <Col sm={12} xs={12} md={12} lg={12} >
              <Table striped bordered condensed responsive hover>
              <thead>
                <tr>
                  <th colSpan="9">Data fetched throught the api</th>
                  </tr>
                <tr>
                <th>Customer Id</th>
                <th>First Name</th>
                <th>Surname</th>
                <th>Email Address</th>
                <th>Address</th>
                <th>City</th>
                <th>State</th>
                <th>Postal Code</th>
                <th>Company Name</th>
                
                </tr>
                </thead>
                <tbody>
                { this.state.fetching ? loader1: null}
                {this.state.contacts.map((item,index)=>{
                    
                    return <tr key={item.customerId}><td>{item.customerId}</td><td>{item.firstname}</td><td>{item.surname}</td><td>{item.email}</td><td>{item.address}</td><td>{item.city}</td><td>{item.state}</td><td>{item.postalCode}</td><td>{item.companyName}</td></tr>;
                    
                  })}
                </tbody>
                <tfoot><tr><th colSpan="2">Total Records</th><td colSpan="2">{this.state.contacts.length}</td><td colSpan="5"></td></tr></tfoot>
                </Table>
                </Col>
                </Row>
          </Grid>
          
        </div>
    );
  }
}


