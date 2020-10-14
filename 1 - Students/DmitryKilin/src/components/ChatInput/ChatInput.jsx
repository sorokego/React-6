import './style.css'
import React, { Component } from 'react'
import {CurrentUser} from '../../moduls/User/User'

export default class ChatInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    changeText = evt => {
        let val = evt.target.value;
        this.setState({ text: val });
    }

    send = () => {
        this.props.send({sender: CurrentUser.name, text: this.state.text}); //работает метод из родителя
        this.setState({ text: '' });
    }

    render() {
        let { text } = this.state;
        return (
            <div>
                <input type="text" value = { text } onChange = { this.changeText }/>
                <button onClick = { this.send }>Send</button>
            </div>
        )
    }
}