import React, { Component } from 'react'
import Graph from 'react-graph-vis'
import { Route, Link } from 'react-router-dom'
import * as feminism from '../public/feminism.json'

const NODES = feminism.topics.map(topic => { 
  return {
    color: topic.color,
    key: topic.id,
    id: topic.id,
    label: topic.name,
    title: topic.name,
    mass: topic.children.length === 0 ? 1 : topic.children.length * 1.5,
    shadow: true,
    shape: 'circle',
    description: topic.description
  }
})

const EDGES = []
feminism.topics.forEach(topic => {
  topic.children.forEach(child => {
    EDGES.push({ from: topic.id, to: child.id })
  })
})

const options = {
    layout: { hierarchical: false },
    edges: { color: 'grey'}
}

const events = {
    select: event => {
      const { nodes } = event
      const nodeLabel = JSON.stringify(nodes[0])
      NODES.forEach(node => { 
        if (JSON.stringify(node.id) === nodeLabel) {
          window.alert(node.description)
        }
      })
    }
}
  
class FeminismGraph extends Component {
  
  constructor() {
    super()
    this.state = {
      nodes: NODES,
      edges: EDGES
    }
  }

  render() {
    return (
      <Route path="/graph">
        <div>
          <div id="explain">
            <p id="explain-text">
              Scroll, select, or zoom in to interact with the graph. Each node is clickable! 😮 <Link to="/"> Go back </Link>
            </p>
          </div>
          <Graph
            graph={{ nodes: this.state.nodes, edges: this.state.edges }} 
            options={ options } 
            events={ events } 
            style={{
              height: '90vh',
              width: '100vw',
              backgroundColor: 'beige'
            }}
          />
        </div>
      </Route>
    )
  }
}

export default FeminismGraph
