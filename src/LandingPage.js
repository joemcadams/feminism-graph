import React from 'react'
import { Route, Link } from 'react-router-dom'

export const LandingPage = props => (
    <Route path="/app">
        <div id="app">
            <h1> Feminism </h1>
            <p>
                I don't think feminism is the pursuit of gender parity; I think that definition is deceptively simple. 
                I think feminism is a dynamic discussion on how best to understand social and individual identity
                given the very real differences humans face biologically, culturally, politically, and economically.
                A sincere understanding on these forms of interaction and self-expression, I believe, will naturally lead
                to a more empathetic and sustainable society, and I believe feminism is a movement that acknowledges these difficulties.

                <br/>
                <br/>

                I also believe that feminism is not static - we've come a long, long way since the first liberal feminist movements of the 
                late 1800s. Feminism may have originally been a movement intended just for the white upper-class women of the 19th century,
                but it has since evolved to understand the institution of patriarchy as more complex and embedded in the legal, social, and cultural
                realities of our world. The graph below is my attempt at describing the complexity of that situation. 
            </p>
            <Link to="/graph">
                <button>
                    See the graph
                </button>
            </Link>
        </div>
    </Route>
)