import React from 'react';
import { Stage, Layer } from 'react-konva';
import Piece from '../components/Piece.jsx';
import ControlHubIMG from '../assets/components/ControlHub.png'
import HDHexMotorIMG from '../assets/components/HDHexMotor.png'


function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Piece src={ControlHubIMG} x={50} y={50} height={200} />
          <Piece src={HDHexMotorIMG} x={300} y={50} height={100} />
        </Layer>
      </Stage>
    </div>
  );
}

export default App;
