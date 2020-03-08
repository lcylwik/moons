import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import './style/App.css';
import Element from './components/solution_1/element';
import ElementAlternativo from './components/solution_2/element';
import { data } from './data/information.json';
import 'bootstrap/dist/css/bootstrap.css';

const solution_1 = () => {
  return (
    <div className="main container mt-5">
      <div className="row">
        {data.map(item => (
          <Element key={item.id} info={item}/>
        ))}
      </div>
    </div>)
}

const solution_2 = () => {
  return (
    <div className="main container mt-5">
      <div className="row">
        {data.map(item => (
          <ElementAlternativo key={item.id} info={item}/>
        ))}
      </div>
    </div>)
}

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact="true" component={solution_1} />
      <Route path="/alt" exact="true" component={solution_2} />
    </BrowserRouter>
  );
}

export default App;
