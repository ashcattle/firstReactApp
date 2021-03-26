import React, { Component } from 'react';

class Control extends Component {
    render() {
        console.log("Control render");

        return (
            <nav>
                <ul>
                    <li key="1"><a href="/">create</a></li>
                    <li key="2"><a href="/">update</a></li>
                    <li key="3"><a href="/">delete</a></li>
                </ul>
            </nav>
        );
    }
}

export default Control;