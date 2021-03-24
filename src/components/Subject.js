import React, { Component } from 'react';

class Subject extends Component { // subject라는 태그를 정의한 컴포넌트
    render() {
        console.log("Subject render");

        return (
            <header>
                <h1>
                    <a href="/" onClick={function(e) {
                        console.log(e);
                        // preventDefault() 함수는 태그의 기본 이벤트 동작을 정지시킨다. 해당 태그를 클릭할 때 페이지가 이동하지 않을 것
                        e.preventDefault();

                    }}>{this.props.title}</a>
                </h1>
                {this.props.sub}
            </header>
        );
    }
}

export default Subject;