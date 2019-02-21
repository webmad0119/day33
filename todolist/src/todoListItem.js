import React from "react";
import ReactDom from 'react-dom';

export default class TodoListItem extends React.Component {
    state = {
        data: []
    }

    clickHandler = () => {
        this.props.handlerFunction(+(this._reactInternalFiber.key))
    }

    componentDidMount = () => {
        let el = ReactDom.findDOMNode(this);
        var newEl = document.createElement("span")
        newEl.innerHTML = "hola CHICOS"
        el.appendChild(newEl)

        setTimeout(() => {
            console.log('Our data is fetched');
            this.setState({
                data: 'Updated a second later'
            })
        }, 2000)

        // debugger
    }

    render() {
        return (
            <li>
                <input type="checkbox" onClick={this.clickHandler}></input> <span>{this.props.text} ///{this.state.data}///</span>
            </li>
        )
    }
}