import React, { useEffect, useState } from "react";
import axios from "axios";
import PrisonerCard from "./PrisonerCard";
import { Container, Row} from 'reactstrap';

export default function PrisonerList() {

  const [prisoners, setPrisoners] = useState([]);

  useEffect(() => {
    axios
      .get(`https://prisoner-skills-cj.herokuapp.com/api/prisoners`)
      .then(res => {
        console.log("Prisoner List", res.data);
        setPrisoners(res.data);
      })
      .catch(error => {
        console.log("There has been a Prison Break!", error);
      });
  }, []);

  return (
   <Container>
     <h1>Inmate List</h1>
     <Row>
      {prisoners.map(inmate => {
        return (
          <PrisonerCard
            key={inmate.id}
            id={inmate.id}
            name={inmate.name}
            gender={inmate.gender}
            canHaveWorkLeave={inmate.canHaveWorkLeave}
          />
        );
      })}
      </Row>
  </Container>
  );
};
