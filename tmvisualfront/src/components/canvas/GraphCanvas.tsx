// src/components/canvas/GraphCanvas.tsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectNode } from '../../store/canvasSlice';
import { RootState } from '../../store';
import ReactFlow, { Background, Controls, MiniMap } from 'reactflow';
import 'reactflow/dist/style.css';
import CircleNode from './nodeTypes/CircleNode';
import NodeSettings from '../popups/NodeSettings';

const nodeTypes = {
  circle: CircleNode,
};

const GraphCanvas = () => {
  const dispatch = useDispatch();
  const nodes = useSelector((state: RootState) => state.canvas.nodes);
  const edges = useSelector((state: RootState) => state.canvas.edges);
  const selectedNodePosition = useSelector(
    (state: RootState) => state.canvas.selectedNodePosition
  );

  const handleNodeClick = (_: any, node: any) => {
    dispatch(selectNode({ id: node.id, position: node.position }));
  };

  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
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
      {selectedNodePosition && (
        <div
          style={{
            position: 'absolute',
            top: selectedNodePosition.y,
            left: selectedNodePosition.x,
            transform: 'translate(-50%, -100%)', // Center above the node
            zIndex: 1000,
          }}
        >
          <NodeSettings />
        </div>
      )}
    </div>
  );
};

export default GraphCanvas;
