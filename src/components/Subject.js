import React, { Component } from 'react';

class Subject extends Component { // subject라는 태그를 정의한 컴포넌트
    render() {
        console.log("Subject render");

        return (
            <header>
                <h1>
                    <a href="/" onClick={this.props.handleClick}>{this.props.title}</a>
                </h1>
                {this.props.sub}
            </header>
        );
    }
}

export default Subject;