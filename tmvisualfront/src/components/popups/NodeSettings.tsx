import { useSelector, useDispatch } from 'react-redux';
import { updateNodeSettings } from '../../store/canvasSlice';

function NodeSettings() {
  const dispatch = useDispatch();
  const selectedNodeId = useSelector(state => state.canvas.selectedNodeId);
  const nodes = useSelector(state => state.canvas.nodes);

  if (!selectedNodeId) return null;

  const node = nodes.find(n => n.id === selectedNodeId);

  const handleChange = (e) => {
    dispatch(updateNodeSettings({ nodeId: selectedNodeId, field: 'flowRate', value: e.target.value }));
  };

  return (
    <div className="settings-popup">
      <h3>Edit Node: {node.data.label}</h3>
      <label>Flow Rate:</label>
      <input type="number" value={node.data.flowRate} onChange={handleChange} />
      {/* Other settings */}
    </div>
  );
}