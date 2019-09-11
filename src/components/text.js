import React from 'react'

class Greet extends React.Component{
    render(){
        return <h2>THE {this.props.name}</h2>
    }
}

export default Greet