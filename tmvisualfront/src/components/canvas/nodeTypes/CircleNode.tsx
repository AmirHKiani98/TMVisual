import { Handle, Position } from 'reactflow';
import 'reactflow/dist/style.css';

function CircleNode({ data }: any) {
  return (
    <div style={{
      width: 80,
      height: 80,
      borderRadius: '50%',
      backgroundColor: '#4f46e5', // Indigo color
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontWeight: 'bold',
      border: '2px solid black'
    }}>
      {data.label}

      {/* Input handle */}
      <Handle type="target" position={Position.Top} style={{ background: '#555' }} />
      {/* Output handle */}
      <Handle type="source" position={Position.Bottom} style={{ background: '#555' }} />
    </div>
  );
}

export default CircleNode;