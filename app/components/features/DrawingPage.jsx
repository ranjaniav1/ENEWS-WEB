'use client';

import { Container } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { Stage, Layer, Image as KonvaImage } from 'react-konva';

export default function Paint() {
  const [color, setColor] = useState('#ff0000');
  const [imageObj, setImageObj] = useState(null);
  const [konvaImage, setKonvaImage] = useState(null);
  const stageRef = useRef(null);
  const canvasRef = useRef(null);
  const [stageSize, setStageSize] = useState({ width: 600, height: 400 });

  const imageUrl = "https://cdn.pixabay.com/photo/2016/11/11/19/44/decorative-1817581_960_720.png";


  useEffect(() => {
    const img = new window.Image();
    img.crossOrigin = 'Anonymous';
    img.src = imageUrl;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);

      canvasRef.current = canvas;

      const konvaImg = new window.Image();
      konvaImg.src = canvas.toDataURL();
      konvaImg.onload = () => setKonvaImage(konvaImg);
    };

  }, []);

  const hexToRgba = (hex) => {
    const bigint = parseInt(hex.slice(1), 16);
    return [
      (bigint >> 16) & 255, // R
      (bigint >> 8) & 255,  // G
      bigint & 255,         // B
      255                   // A
    ];
  };

  const colorMatch = (a, b) => a.every((v, i) => v === b[i]);

  const floodFill = (data, x, y, width, height, targetColor, fillColor) => {
    const stack = [[x, y]];
    const getIndex = (x, y) => (y * width + x) * 4;

    while (stack.length > 0) {
      const [cx, cy] = stack.pop();
      const i = getIndex(cx, cy);
      const currentColor = [data[i], data[i + 1], data[i + 2], data[i + 3]];

      if (!colorMatch(currentColor, targetColor)) continue;

      data[i] = fillColor[0];
      data[i + 1] = fillColor[1];
      data[i + 2] = fillColor[2];
      data[i + 3] = fillColor[3];

      if (cx > 0) stack.push([cx - 1, cy]);
      if (cx < width - 1) stack.push([cx + 1, cy]);
      if (cy > 0) stack.push([cx, cy - 1]);
      if (cy < height - 1) stack.push([cx, cy + 1]);
    }
  };

  const handleClick = (e) => {
    const stage = stageRef.current.getStage();
    const pointer = stage.getPointerPosition();

    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const scaleX = canvas.width / stageSize.width;
    const scaleY = canvas.height / stageSize.height;

    const x = Math.floor(pointer.x * scaleX);
    const y = Math.floor(pointer.y * scaleY);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const targetColor = [
      imageData.data[(y * canvas.width + x) * 4],
      imageData.data[(y * canvas.width + x) * 4 + 1],
      imageData.data[(y * canvas.width + x) * 4 + 2],
      imageData.data[(y * canvas.width + x) * 4 + 3],
    ];

    const fillColor = hexToRgba(color);

    if (colorMatch(targetColor, fillColor)) return;

    floodFill(imageData.data, x, y, canvas.width, canvas.height, targetColor, fillColor);
    ctx.putImageData(imageData, 0, 0);

    const newImg = new window.Image();
    newImg.src = canvas.toDataURL();
    newImg.onload = () => setKonvaImage(newImg);
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <div style={{ position: 'absolute', zIndex: 10, padding: '10px', background: '#fff' }}>
        <label htmlFor="colorPicker">Pick a Color: </label>
        <input
          type="color"
          id="colorPicker"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>

      <Stage
        ref={stageRef}
        width={stageSize.width}
        height={stageSize.height}
        onMouseDown={handleClick}
        style={{  display:"flex",marginTop: '50px',justifyContent:"center" }}
      >
        <Layer>
          {konvaImage && (
            <KonvaImage
              image={konvaImage}
              width={stageSize.width}
              height={stageSize.height}
            />
          )}
        </Layer>
      </Stage>
    </Container>
  );
}
