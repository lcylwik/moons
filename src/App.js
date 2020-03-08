import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './style/App.css';
import Element from './components/element';
import { data } from './data/information.json';
import 'bootstrap/dist/css/bootstrap.css';

const Home = () => {
  return (
    <div className="main container mt-5">
      <div className="row">
        {data.map(item => (
          <Element key={item.id} info={item}/>
        ))}
      </div>
    </div>)
}

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} />
    </BrowserRouter>
  );
}

export default App;
