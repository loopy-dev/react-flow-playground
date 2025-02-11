'use client';

import { useCallback } from 'react';
import styled from 'styled-components';
import {
  Background,
  Controls,
  MiniMap,
  ReactFlow,
  useEdgesState,
  useNodesState,
  addEdge,
  BackgroundVariant,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import './flow.css';
import type { Connection } from '@xyflow/react';

const ReactFlowPage = () => {
  const [nodes, , onNodesChange] = useNodesState([
    { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
    { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
    { id: '3', position: { x: 0, y: 200 }, data: { label: '3' } },
  ]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([
    { id: 'e1-2', source: '1', target: '2' },
  ]);

  const handleConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <Container style={{ width: '1200px', height: '600px', margin: '16px 0 0' }}>
      <ReactFlow
        edges={edges}
        nodes={nodes}
        onConnect={handleConnect}
        onEdgesChange={onEdgesChange}
        onNodesChange={onNodesChange}
      >
        <Controls />
        <MiniMap />
        <Background gap={12} size={1} variant={BackgroundVariant.Dots} />
      </ReactFlow>
    </Container>
  );
};

export default ReactFlowPage;

const Container = styled.div`
  .react-flow-attribution {
    display: none;
    pointer-events: none;
  }
`;
