import React, { Component } from 'react';

class TOC extends Component {
    render() {
      console.log("TOC render");

      let lists = [];
      let data = this.props.data;

      data.forEach(e => {
        // dataset 속성으로 데이터를 삽입하거나 함수의 파라미터로 데이터를 넘길 때 모두 데이터가 문자열로 형변환함 => 현재 함수파라미터는 동작 x
        // dataset 속성을 활용할 때는 data-id=e.id의 속성을 활용하고, app.js의 함수에서 event target dataset id로 받자
        lists.push(<li key={e.id}><a href="/" data-id={e.id} onClick={this.props.handleClick}>{e.title}</a></li>);
      });

      return (
        <nav>
            <ul>
                {lists}
            </ul>
        </nav>
      );
    }
  }

  export default TOC;