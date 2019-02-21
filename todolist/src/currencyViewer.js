import React from "react";

export default class CurrencyViewer extends React.Component {
    moreMoney = undefined

    componentWillReceiveProps(nextProps) {
        if (nextProps.money > this.props.money) {
            this.moreMoney = true
        }   else {
            this.moreMoney = false
        }
    }

    render() {
        return (
            <li style={{color: this.moreMoney ? "green" : "red"}}>
                {this.props.money}
            </li>
        )
    }
}