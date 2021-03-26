import React, { Component } from 'react';
import ReadContent from './ReadContent';
import CreateContent from './CreateContent';

class Content extends Component {
    render() {
        console.log("Content render");

        let tag = null;
        if (this.props.mode === 'welcome' || this.props.mode === 'read') {
            tag = <ReadContent title={this.props.title} desc={this.props.desc}></ReadContent>

        } else if (this.props.mode === 'create') {
            tag = <CreateContent></CreateContent>
        }

        return (
            <div className="Content">
                {tag}
            </div>
        );
    }
}

export default Content;