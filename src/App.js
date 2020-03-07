import React from 'react';
import './style/App.css';
import Element from './components/element';
import { data } from './data/information.json';
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
  return (
    <div className="main container mt-5">
      <div className="row">
          {data.map(item => (
            <Element key={item.id} info={item}> </Element>
          ))}
      </div>
    </div>
  );
}

export default App;
