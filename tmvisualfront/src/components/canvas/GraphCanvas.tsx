// src/components/canvas/GraphCanvas.tsx
import React from 'react';
import ReactFlow, { Background, Controls, MiniMap } from 'reactflow';
import 'reactflow/dist/style.css';

const initialNodes = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Start Node' },
    position: { x: 250, y: 5 },
  },
  {
    id: '2',
    data: { label: 'Second Node' },
    position: { x: 100, y: 100 },
  },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' },
];

const GraphCanvas = () => {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <ReactFlow nodes={initialNodes} edges={initialEdges} fitView>
        <Background />
      </ReactFlow>
    </div>
  );
};

export default GraphCanvas;
