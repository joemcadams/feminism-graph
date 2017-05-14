import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import FeminismGraph from './FeminismGraph'
import { LandingPage } from './LandingPage'

export const App = () => (
    <Router>
        <div>
            <Route exact path="/" component={ LandingPage }/>
            <Route exact path="/graph" component={ FeminismGraph }/>
        </div>
    </Router>
)