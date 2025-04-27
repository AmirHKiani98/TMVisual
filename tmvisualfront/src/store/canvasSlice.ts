// src/store/canvasSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NodeType, EdgeType } from '../types/graph';

interface CanvasState {
  model: string;
  nodes: NodeType[];
  edges: EdgeType[];
  selectedNodeId: string | null;
}

const initialState: CanvasState = {
  model: 'CTM',
  nodes: [],
  edges: [],
  selectedNodeId: null,
};

const canvasSlice = createSlice({
  name: 'canvas',
  initialState,
  reducers: {
    selectNode(state, action: PayloadAction<string | null>) {
      state.selectedNodeId = action.payload;
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
