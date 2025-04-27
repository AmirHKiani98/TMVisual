// src/store/canvasSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NodeType, EdgeType } from '../types/graph';

interface CanvasState {
  model: string;
  nodes: NodeType[];
  edges: EdgeType[];
  selectedNodeId: string | null;
  selectedNodePosition: { x: number; y: number } | null; // Add this
}

const initialState: CanvasState = {
  model: 'CTM',
  nodes: [
    {
      id: '1',
      type: 'circle',
      position: { x: 0, y: 0 },
      data: { label: '1', settings: { color: 'red' } },
    },
    {
      id: '2',
      type: 'circle',
      position: { x: 100, y: 100 },
      data: { label: '2', settings: { color: 'blue' } },
    },
    {
      id: '3',
      type: 'circle',
      position: { x: 200, y: 200 },
      data: { label: '3', settings: { color: 'green' } },
    },
  ],
  edges: [
    {
      id: 'e1-2',
      source: '1',
      target: '2',
      type: 'straight',
    },
    {
      id: 'e2-3',
      source: '2',
      target: '3',
      type: 'straight',
    },
  ],
  selectedNodeId: null,
  selectedNodePosition: null, // Initialize as null
};

const canvasSlice = createSlice({
  name: 'canvas',
  initialState,
  reducers: {
    selectNode(
      state,
      action: PayloadAction<{ id: string | null; position: { x: number; y: number } | null }>
    ) {
      state.selectedNodeId = action.payload.id;
      state.selectedNodePosition = action.payload.position;
    },
    updateNodeSettings(state, action: PayloadAction<{ nodeId: string; field: string; value: any }>) {
      const { nodeId, field, value } = action.payload;
      const node = state.nodes.find((n) => n.id === nodeId);
      if (node) {
        node.data[field] = value;
      }
    },
    setNodes(state, action: PayloadAction<NodeType[]>) {
      state.nodes = action.payload;
    },
    setEdges(state, action: PayloadAction<EdgeType[]>) {
      state.edges = action.payload;
    },
    setModel(state, action: PayloadAction<string>) {
      state.model = action.payload;
    },
  },
});

export const { selectNode, updateNodeSettings, setNodes, setEdges, setModel } = canvasSlice.actions;
export default canvasSlice.reducer;
