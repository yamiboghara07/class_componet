import React from 'react';
import { render } from "@testing-library/react"

class Home extends React.Component {
    
    getdata = () => {
        this.setState({
            name:"yami"
        });
    }

    constructor()
    {
        super();
        // console.log("Hello");
        this.state={
            name:"yummy"
        }
    }
    render()
    {
        return(
            <>
                <h1>hello</h1>
                <h2>{this.state.name}</h2>
                <input type="button" onClick={this.getdata} value="click"></input>
                <h3>props : {this.props.contact}</h3>
            </>
        )
    }
}
export default Home;