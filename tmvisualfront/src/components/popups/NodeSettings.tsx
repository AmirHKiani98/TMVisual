import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { updateNodeSettings } from '../../store/canvasSlice';

function NodeSettings() {
  const dispatch = useDispatch();
  const selectedNodeId = useSelector(
    (state: RootState) => state.canvas.selectedNodeId
  );
  const nodes = useSelector((state: RootState) => state.canvas.nodes);

  if (!selectedNodeId) return null;

  const node = nodes.find((n) => n.id === selectedNodeId);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (node) {
      dispatch(
        updateNodeSettings({
          nodeId: selectedNodeId,
          field: 'flowRate',
          value: e.target.value,
        })
      );
    }
  };

  if (!node) return null;

  return (
    <div className="settings-popup">
      <h3>Edit Node: {node.data.label}</h3>
      <label>Flow Rate:</label>
      <input
        type="number"
        value={node.data.flowRate || ''}
        onChange={handleChange}
      />
      {/* Other settings */}
    </div>
  );
}

export default NodeSettings;
