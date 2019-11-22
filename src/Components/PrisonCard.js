import React from 'react';
import { Card, CardText, CardSubtitle, CardBody, CardTitle, Col } from "reactstrap";
import {Link} from 'react-router-dom';

const PrisonCard = props => {
  return (
    <Col xs="6" sm="4">
      <Card>
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
          <CardText>{props.address}</CardText>
          <CardSubtitle><Link to={`/prison/${props.id}`} key={props.id}><button>Show Inmates</button></Link></CardSubtitle>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PrisonCard