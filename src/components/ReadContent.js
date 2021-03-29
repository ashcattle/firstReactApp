import React, { Component } from 'react';

class ReadContent extends Component {
    render() {
        console.log("ReadContent render");

        return (
            <div>
                <h2>{this.props.title}</h2>
                {this.props.desc}
            </div>
        );
    }
}

export default ReadContent;