import React from "react";
import PrisonerList from "./Components/PrisonerList";
import PrisonerSkillCard from './Components/PrisonerSkillCard';
import Prisons from './Components/Prisons';
import SignupForm from './Components/SignUp';
import { Route} from 'react-router-dom';
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Prisons} />
      <Route exact path="/signup" component={SignupForm} />
      <Route exact path="/prison/:id" render={props => <PrisonerList {...props} />} />
      <Route exact path="/prisoner/:id" render={props => <PrisonerSkillCard {...props} />} />
    </div>
  );
}

export default App;
