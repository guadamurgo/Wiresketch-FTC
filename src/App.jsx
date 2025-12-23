import React, { useState, useEffect } from 'react';
import { Stage, Layer, Image } from 'react-konva';
import ControlHubIMG from './assets/IMG/ControlHub.png';

function App() {
  const [img, setImg] = useState(null);

  useEffect(() => {
    const image = new window.Image();
    image.src = ControlHubIMG;
    image.onload = () => setImg(image);
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          {img && (
            <Image
              image={img}
              x={50}
              y={50}
              width={(img.width / img.height) * 200}
              height={200}
              draggable
            />
          )}
        </Layer>
      </Stage>
    </div>
  );
}

export default App;
