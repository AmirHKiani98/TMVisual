import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// 1. Define proper types
export interface NodeType {
  id: string;
  data: Record<string, any>; // Later you can refine this per model
}

export interface EdgeType {
  id: string;
  source: string;
  target: string;
}

export interface CanvasState {
  model: string;
  nodes: NodeType[];
  edges: EdgeType[];
  selectedNodeId: string | null;
}

// 2. Initial state with types
const initialState: CanvasState = {
  model: 'CTM',
  nodes: [],
  edges: [],
  selectedNodeId: null,
};

// 3. Create slice
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
    // ✨ (Optional) add more reducers now easily
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

// 4. Export everything cleanly
export const { selectNode, updateNodeSettings, setNodes, setEdges, setModel } = canvasSlice.actions;
export default canvasSlice.reducer;