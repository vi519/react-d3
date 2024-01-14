import React, { useRef } from 'react';
import { Graph } from 'react-d3-graph';

const TopologyGraph = () => {
  const graphRef = useRef(null);

  const googleNode = { id: 'google', x: 100, y: 100, draggable: true };
  const newYorkSitesNode = { id: 'new-york-sites', x: 300, y: 100, draggable: true };
  const californiaSitesNode = { id: 'california-sites', x: 500, y: 100, draggable: true };

  // Additional nodes
  const washington = { id: 'washington', x: 350, y: 200, draggable: true };
  const tokyo = { id: 'tokyo', x: 450, y: 200, draggable: true };
  const vegas = { id: 'vegas', x: 200, y: 300, draggable: true };
  const delhi = { id: 'delhi', x: 400, y: 300, draggable: true };
  const mumbai = { id: 'mumbai', x: 600, y: 300, draggable: true };

  const graphData = {
    nodes: [googleNode, newYorkSitesNode, californiaSitesNode, washington, tokyo, vegas, delhi, mumbai],
    links: [
      { source: 'google', target: 'new-york-sites' },
      { source: 'new-york-sites', target: 'california-sites' },
      { source: 'california-sites', target: 'washington' },
      { source: 'california-sites', target: 'tokyo' },
      { source: 'california-sites', target: 'vegas' },
      { source: 'vegas', target: 'delhi' },
      { source: 'delhi', target: 'mumbai' },
    ],
  };

  const config = {
    nodeHighlightBehavior: true,
    node: {
      color: 'lightgreen',
      size: 120,
      highlightStrokeColor: 'blue',
    },
    link: {
      highlightColor: 'lightblue',
    },
    height: window.innerHeight,
    width: window.innerWidth,
    staticGraph: false, // Allow the graph to be dynamic (draggable)
    viewGenerator: (width, height, offsetX, offsetY, zoom) => {
      return {
        x: width / 2,
        y: height / 2,
        k: 0.8, // Adjust the initial zoom level
      };
    },
  };

  return (
    <div>
      <Graph
        ref={graphRef}
        id="topology-graph"
        data={graphData}
        config={config}
        onMouseOverNode={console.log}
        onMouseOutNode={console.log}
        onClickNode={console.log}
      />
    </div>
  );
};

export default TopologyGraph;
