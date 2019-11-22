import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Container, Row} from 'reactstrap';

import PrisonCard from './PrisonCard';

const Prisons = props => {
  const [prisons, setPrisons] = useState([]);

  useEffect(() => {
    axios
      .get(`https://prisoner-skills-cj.herokuapp.com/api/prisons`)
      .then(res => {
        console.log("Prison List", res.data);
        setPrisons(res.data);
      })
      .catch(error => {
        console.log("There has been a Prison Break!", error);
      });
  }, []);

  return (
    
    <Container>
      <h1>Prison List</h1>
    <Row>
      {prisons.map(prison => {
        return (
          
            <PrisonCard
              key={prison.id}
              id={prison.id}
              name={prison.name}
              address={prison.address}
            />
        );
      })}
      </Row>
    </Container>
  )
}

export default Prisons