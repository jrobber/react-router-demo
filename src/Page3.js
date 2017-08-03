import React, {Component} from 'react'

export default class Page3 extends Component {
    constructor(props){
        super(props);

        this.state = {
            idFromUrl: props.match.params.id
        }
    }
    render(){
        return (
            <p>I am page 3. You asked for id : {this.state.idFromUrl}</p>
        )
    }
}