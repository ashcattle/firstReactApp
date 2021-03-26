import React, { Component } from 'react';
import ReadContent from './ReadContent';

class Content extends Component {
    render() {
        console.log("ReadContent render");

        return (
            <div className="Content">
                <ReadContent title={this.props.title} desc={this.props.desc}></ReadContent>
            </div>
        );
    }
}

export default Content;