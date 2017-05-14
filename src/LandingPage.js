import React from 'react'
import FeminismGraph from './FeminismGraph'

export class LandingPage extends React.Component {
    
    constructor() {
        super()
        this.state = {
            showGraph: false
        }
    }

    toggleShowGraph = () => this.setState({ showGraph: true })

    render() {
        return this.state.showGraph
            ? <FeminismGraph/>
            : <div id="app">
                <h1> Feminism </h1>
                <p>
                    I don't think feminism is simply the pursuit of gender parity; I think that definition is deceptively simple. 
                    I think feminism is a dynamic discussion of how best to understand social and individual identity
                    given the very real differences humans exhibit biologically, culturally, politically, and economically.
                    A sincere attempt to understand these interactions and forms of self-expression, I believe, will naturally lead
                    to a more empathetic and sustainable society; I believe feminism is an ongoing discussion of these challenges.

                    <br/>
                    <br/>

                    I also believe that feminism is not static - we've come a long, long way since the first liberal feminist movements of the 
                    late 1800s. Feminism may have originally been a movement born of white, wealthy, and educated women of the 19th century seeking legal equality,
                    but it has since evolved to inclusively understand the institution of patriarchy as more complex. It's embedded in the legal, social, economic, and cultural
                    realities of our world. The graph below is my attempt at describing the complexity of what feminism grapples with. 
                </p>
                <button onClick={ this.toggleShowGraph }>
                    Click here
                </button>
            </div>
    }
}