import React from 'react';
import './style/App.css';
import Element from './components/element';
import { data } from './data/information.json';

const App = () => {
  return (
    <div className="App">
      { data.map(item => (
        <Element key={item.id} info={item}> </Element>
      )) }
    </div>
  );
}

export default App;
