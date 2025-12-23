import React from 'react';
import { Stage, Layer } from 'react-konva';
import Piece from './Piece';
import ControlHubIMG from './assets/IMG/ControlHub.png';
import MotorIMG from './assets/IMG/HDHexMotor.png';

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Piece src={ControlHubIMG} x={50} y={50} height={200} />
          <Piece src={MotorIMG} x={300} y={50} height={100} />
        </Layer>
      </Stage>
    </div>
  );
}

export default App;
