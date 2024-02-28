import logo from './logo.svg';
import './App.css';
import React, { useState }  from 'react';
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

    // 첫 번째 드롭다운의 선택된 값을 관리하는 상태
    const [selectedValue1, setSelectedValue1] = useState('');
    // 두 번째 드롭다운의 선택된 값을 관리하는 상태
    const [selectedValue2, setSelectedValue2] = useState('');


    // 첫 번째 드롭다운에서 선택할 때 호출될 이벤트 핸들러
    const handleChange1 = (event) => {
      setSelectedValue1(event.target.value);
  };

  // 두 번째 드롭다운에서 선택할 때 호출될 이벤트 핸들러
  const handleChange2 = (event) => {
      setSelectedValue2(event.target.value);
  };

  return (
    <div className="App">

    <div className="dropdown-container">
      <select onChange={handleChange1} className="dropdown">
          <option value="">첫 번째 옵션을 선택해주세요</option>
          <option value="option1">첫 번째 옵션 1</option>
          <option value="option2">첫 번째 옵션 2</option>
          <option value="option3">첫 번째 옵션 3</option>
      </select>
      <p className="selected-text">출발지: {selectedValue1 ? `당신은 ${selectedValue1}를 선택했습니다.` : '선택된 것이 없습니다.'}</p>
    </div>

    <div className="dropdown-container">
      <select onChange={handleChange2} className="dropdown">
          <option value="">두 번째 옵션을 선택해주세요</option>
          <option value="option1">두 번째 옵션 1</option>
          <option value="option2">두 번째 옵션 2</option>
          <option value="option3">두 번째 옵션 3</option>
      </select>
      <p className="selected-text">도착지: {selectedValue2 ? `당신은 ${selectedValue2}를 선택했습니다.` : '선택된 것이 없습니다.'}</p>
    </div>

      <div>
        <h1>건물 지도</h1>
        <FloorMap />
      </div>
    </div>
  );
  
}

export default App;
