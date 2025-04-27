// src/components/canvas/GraphCanvas.tsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectNode } from '../../store/canvasSlice';
import { RootState } from '../../store';
import ReactFlow, { Background, Controls, MiniMap } from 'reactflow';
import 'reactflow/dist/style.css';
import CircleNode from './nodeTypes/CircleNode';

const nodeTypes = {
  circle: CircleNode,
};

const GraphCanvas = () => {
  const dispatch = useDispatch();
  const nodes = useSelector((state: RootState) => state.canvas.nodes);
  const edges = useSelector((state: RootState) => state.canvas.edges);

  const handleNodeClick = (_: any, node: any) => {
    dispatch(selectNode(node.id));
  };

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView
        onNodeClick={handleNodeClick}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default GraphCanvas;
