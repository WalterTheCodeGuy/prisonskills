import React from "react";
import {Link} from 'react-router-dom';
import { Card, CardBody, CardTitle, CardSubtitle, Col } from "reactstrap";

const PrisonerCard = props => {
  return (
    <Col xs="6" sm="4" key={props.id}>
      <Card>
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
          <CardSubtitle><span className='title'>Gender:</span> {props.gender}</CardSubtitle>
          <CardSubtitle><span className='title'>Availability:</span> {props.canHaveWorkLeave}</CardSubtitle>
          <CardSubtitle><Link to={`/prisoner/${props.id}`}><button>Skills + More Info</button></Link></CardSubtitle>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PrisonerCard;