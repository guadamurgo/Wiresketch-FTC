import React, { useState, useEffect } from 'react';
import { Image } from 'react-konva';

export default function Piece({ src, x = 0, y = 0, height = 100 }) {
  const [img, setImg] = useState(null);

  useEffect(() => {
    const image = new window.Image();
    image.src = src;
    image.onload = () => setImg(image);
  }, [src]);

  if (!img) return null;

  return (
    <Image
      image={img}
      x={x}
      y={y}
      height={height}
      width={(img.width / img.height) * height} // mantiene proporción
      draggable
    />
  );
}
