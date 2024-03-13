
import React, { useState } from 'react';

const ToyRobot = () => {
  const [x, setX] = useState(null);
  const [y, setY] = useState(null);
  const [direction, setDirection] = useState(null);
  const [tableWidth] = useState(5);
  const [tableHeight] = useState(5);

  const placeRobot = (x, y, direction) => {
    if (isValidPosition(x, y)) {
      setX(x);
      setY(y);
      setDirection(direction.toUpperCase());
    }
  };

  const moveRobot = () => {
    if (!x || !y || !direction) return;
    let newX = x;
    let newY = y;

    switch (direction) {
      case 'NORTH':
        newY = Math.min(y + 1, tableHeight - 1);
        break;
      case 'EAST':
        newX = Math.min(x + 1, tableWidth - 1);
        break;
      case 'SOUTH':
        newY = Math.max(y - 1, 0);
        break;
      case 'WEST':
        newX = Math.max(x - 1, 0);
        break;
      default:
        break;
    }

    if (isValidPosition(newX, newY)) {
      setX(newX);
      setY(newY);
    }
  };

  const rotateLeft = () => {
    if (!direction) return;
    const directions = ['NORTH', 'WEST', 'SOUTH', 'EAST'];
    const currentIdx = directions.indexOf(direction);
    const newDirection = directions[(currentIdx + 1) % 4];
    setDirection(newDirection);
  };

  const rotateRight = () => {
    if (!direction) return;
    const directions = ['NORTH', 'EAST', 'SOUTH', 'WEST'];
    const currentIdx = directions.indexOf(direction);
    const newDirection = directions[(currentIdx + 1) % 4];
    setDirection(newDirection);
  };

  const report = () => {
    if (x !== null && y !== null && direction !== null) {
      alert(`Output: ${x},${y},${direction}`);
    }
  };

  const isValidPosition = (x, y) => {
    return x >= 0 && x < tableWidth && y >= 0 && y < tableHeight;
  };

  return (
    <div>
      <button onClick={() => placeRobot(0, 0, 'NORTH')}>PLACE 0,0,NORTH</button>
      <button onClick={moveRobot}>MOVE</button>
      <button onClick={rotateLeft}>LEFT</button>
      <button onClick={rotateRight}>RIGHT</button>
      <button onClick={report}>REPORT</button>
    </div>
  );
};

export default ToyRobot;

