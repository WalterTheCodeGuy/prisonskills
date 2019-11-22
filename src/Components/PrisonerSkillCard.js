import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Image } from 'semantic-ui-react';
import { Card, CardBody, CardTitle, CardSubtitle, Col } from "reactstrap";
import male from '../img/male.jpg';
import female from '../img/female.jpg';
import check from '../img/check.png';
import x from '../img/x.png';

const PrisonerSkillCard = props => {
  const [prisonerData, setPrisonerData] = useState(null)
  const prisonerId = parseInt(props.match.params.id)
  
  useEffect(() => {
    axios
      .get(`https://prisoner-skills-cj.herokuapp.com/api/prisoners/${prisonerId}/skills`)
      .then(result => {
        console.log(result.data)
        setPrisonerData(result.data)
      })
      .catch(error => {
        console.log('axios get skills error: ', error)
      })
  }, [])

  return (
    <Col xs="6" sm="4">
        {prisonerData ?
      <Card>
        <CardBody>
          <CardTitle>{prisonerData.name}</CardTitle>
          <CardSubtitle>
            {prisonerData.gender === "Male" ? 
            <Image src={male} wrapped ui={false} /> 
            : 
            <Image src={female} wrapped ui={false} />
            }
          </CardSubtitle>
          <CardSubtitle><span className='title'>Availability:</span> {prisonerData.canHaveWorkLeave === 1 ? 
            <Image className='leave' src={check} wrapped ui={false} /> 
            : 
            <Image className='leave' src={x} wrapped ui={false} />
            }</CardSubtitle>
          <CardSubtitle><span className='title'>Skills:</span> {prisonerData.skills.map(skill => <p>{skill.name}</p>)}</CardSubtitle>
        </CardBody>
      </Card>
        :
        ''
        }
    </Col>
  );
};
export default PrisonerSkillCard;