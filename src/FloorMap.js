import React from 'react';

// 이미지를 import 하는 방법 (src 폴더 내에 있을 경우)
import firstFloorMap from 'C:/Users/rkdxo/OneDrive/바탕 화면/work/my-app/src/아셈타워_31F.jpg'; // 경로는 실제 이미지 파일에 맞게 조정해야 합니다.
import secondFloorMap from 'C:/Users/rkdxo/OneDrive/바탕 화면/work/my-app/src/아셈타워_32F.jpg';
import thirdFloorMap from 'C:/Users/rkdxo/OneDrive/바탕 화면/work/my-app/src/아셈타워_33F.jpg';

const FloorMap = () => {
  return (
    <div>
      <img src={thirdFloorMap} alt="1층 지도" />
      <img src={secondFloorMap} alt="2층 지도" />
      <img src={firstFloorMap} alt="3층 지도" />
    </div>
  );
};

export default FloorMap;
