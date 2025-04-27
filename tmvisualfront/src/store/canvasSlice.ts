import { createSlice } from '@reduxjs/toolkit';

const canvasSlice = createSlice({
  name: 'canvas',
  initialState: {
    model: 'CTM',
    nodes: [],
    edges: [],
    selectedNodeId: null,
  },
  reducers: {
    selectNode(state, action) {
      state.selectedNodeId = action.payload;
    },
    updateNodeSettings(state, action) {
      const { nodeId, field, value } = action.payload;
      const node = state.nodes.find(n => n.id === nodeId);
      if (node) {
        node.data[field] = value;
      }
    },
    // Other reducers
  },
});

export const { selectNode, updateNodeSettings } = canvasSlice.actions;
export default canvasSlice.reducer;
