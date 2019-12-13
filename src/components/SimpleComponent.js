import React, {Component} from 'react'
import SimplerComponent from './SimplerComponent'

class SimpleComponent extends Component {

    state ={
        mood: 'happy'
    }

    handleClick = () => {
        let newMood
        if(this.state.mood === 'happy') {
            newMood = 'sad'
        }else{
            newMood = 'happy'
        }
        this.setState({ mood: newMood})
    }

    render() {
        return <div onClick={this.handleClick}>{this.state.mood}</div>
    }

}

export default SimpleComponent