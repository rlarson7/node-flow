import React from 'react';
import { DndProvider } from 'react-dnd/dist/core';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Stage, Layer, Rect } from 'react-konva';

const Box: React.FC<{ x: number; y: number }> = ({ x, y }) => {
  return (
    <Rect
      x={x}
      y={y}
      width={50}
      height={50}
      fill="red"
      draggable
      onDragEnd={(e) => {
        console.log('Dragged to:', e.target.x(), e.target.y());
      }}
    />
  );
};

const App: React.FC = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ width: '100vw', height: '100vh' }}>
        <h1> Nodeflow AI Workflow Designer</h1>
        <Stage width={window.innerWidth} height={window.innerHeight}>
          <Layer>
            <Box x={50} y={50} />
          </Layer>
        </Stage>
      </div>
    </DndProvider>
  );
};

export default App;