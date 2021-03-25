import React, { Component } from 'react';

class TOC extends Component {
    render() {
      console.log("TOC render");

      let lists = [];
      let data = this.props.data;

      data.forEach(e => {
        // dataset 속성으로 데이터를 삽입할 때, 문자열로 형변환이 이루어짐 data-id={e.id}
        lists.push(<li key={e.id}><a href="/" onClick={this.props.handleClick(e.id)}>{e.title}</a></li>);
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