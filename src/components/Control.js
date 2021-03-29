import React, { Component } from 'react';

class Control extends Component {
    render() {
        console.log("Control render");

        return (
            <nav>
                <ul>
                    <li key={1}><a href="/" data-mode="create" onClick={this.props.handleControl}>create</a></li>
                    <li key={2}><a href="/" data-mode="update" onClick={this.props.handleControl}>update</a></li>
                    <li key={3}><a href="/" data-mode="delete">delete</a></li>
                </ul>
            </nav>
        );
    }
}

export default Control;