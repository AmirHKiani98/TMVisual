// src/types/graph.d.ts
export interface NodeType {
    id: string;
    type?: string; // Optional, like 'circle', 'input', etc.
    position: { x: number; y: number };
    data: Record<string, any>;
  }
  
  export interface EdgeType {
    id: string;
    source: string;
    target: string;
    type?: string; // Optional for edges, like 'smoothstep', 'straight'
  }
