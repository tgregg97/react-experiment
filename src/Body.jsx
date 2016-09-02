import React from 'react';
import { Button,Grid,Jumbotron,Row,Col,Image,PageHeader } from 'react-bootstrap';


class Body extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <Grid>
            <h1>Hey there!</h1>
            <p>My name is Trevor Gregg and I would like to work for you!</p>
            <p><Button bsStyle='primary' bsSize='large'>Contact Me!</Button></p>
          </Grid>
        </Jumbotron>
        <Grid>
         <Row>
           <Col md={4}>
             <h2>My Projects</h2>
             <p>.</p>
             <p><Button>View details »</Button></p>
           </Col>
           <Col md={4}>
             <h2>My Experience</h2>
             <p></p>
             <p><Button>View details »</Button></p>
           </Col>
           <Col md={4}>
             <h2>Hire Me?</h2>
             <p></p>
             <p><Button>View details »</Button></p>
           </Col>
         </Row>
       </Grid>
      </div>
    );
  }
}

export default Body;
