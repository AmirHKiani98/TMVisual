import { Handle, Position } from 'reactflow';
import 'reactflow/dist/style.css';

function CircleNode({ data }: any) {
    return (
        <div style={{
            width: 30,
            height: 30,
            borderRadius: '50%',
            backgroundColor: '#4f46e5', // Indigo color
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
            border: '2px solid black',
            position: 'relative'
        }}>
            {data.label}

            {/* Input handle */}
            <Handle
                type="target"
                position={Position.Top}
                style={{ background: '#555', position: 'absolute', top: -5, left: '50%', transform: 'translateX(-50%)' }}
            />
            <Handle
                type="target"
                position={Position.Left}
                style={{ background: '#555', position: 'absolute', top: '50%', left: -5, transform: 'translateY(-50%)' }}
            />
            <Handle
                type="target"
                position={Position.Right}
                style={{ background: '#555', position: 'absolute', top: '50%', right: -5, transform: 'translateY(-50%)' }}
            />
            <Handle
                type="target"
                position={Position.Bottom}
                style={{ background: '#555', position: 'absolute', bottom: -5, left: '50%', transform: 'translateX(-50%)' }}
            />

            {/* Output handle */}
            <Handle
                type="source"
                position={Position.Top}
                style={{ background: '#555', position: 'absolute', top: -5, left: '50%', transform: 'translateX(-50%)' }}
            />
            <Handle
                type="source"
                position={Position.Left}
                style={{ background: '#555', position: 'absolute', top: '50%', left: -5, transform: 'translateY(-50%)' }}
            />
            <Handle
                type="source"
                position={Position.Right}
                style={{ background: '#555', position: 'absolute', top: '50%', right: -5, transform: 'translateY(-50%)' }}
            />
            <Handle
                type="source"
                position={Position.Bottom}
                style={{ background: '#555', position: 'absolute', bottom: -5, left: '50%', transform: 'translateX(-50%)' }}
            />
        </div>
    );
}

export default CircleNode;