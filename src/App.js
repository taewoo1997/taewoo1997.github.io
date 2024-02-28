import logo from './logo.svg';
import './App.css';

import React from 'react';
import FloorMap from './FloorMap'; // FloorMap 컴포넌트를 import 합니다.

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );

  return (
    <div className="App">
      <h1>건물 지도</h1>
      <FloorMap />
    </div>
  );
  
}

export default App;
