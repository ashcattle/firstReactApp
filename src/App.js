import './App.css';
import React, { Component } from 'react';
import Subject from './components/Subject';
import TOC from './components/TOC';
import Content from './components/Content';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      mode: 'welcome',  // 현재 페이지가 welcome 페이지인지 read 페이지인지 구분하기 위한 구분자
      selected_content_id: 1,
      subject:{title: 'WEB', sub: 'world wide WEB!'},
      welcome:{title: 'Welcome', desc: 'Hello React!'},
      contents:[
        {id: 1, title: 'HTML', desc: 'HTML is for information'},
        {id: 2, title: 'CSS', desc: 'CSS is for design'},
        {id: 3, title: 'JavaScript', desc: 'JavaScript is for interactive'}
      ]
    }
  }

  // Subject Click Handler
  handleSubjectClick = (e) => {
    e.preventDefault(); // preventDefault() 함수는 태그의 기본 동작을 정지시킨다. 해당 태그를 클릭할 때 페이지가 이동하지 않을 것
    this.setState({
      mode: 'welcome'
    });
  }

  // TOC Click Handler
  handleTOCClick = (e) => {
    e.preventDefault();
    this.setState({
      mode: 'read',
      selected_content_id: Number(e.target.dataset.id)  // 파라미터들은 문자열로 형변환됨
    });
  }
  
  render() {
    console.log("App render");

    let _title, _desc = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;

    } else if (this.state.mode === 'read') {
      try {
        let data = this.state.contents.filter(x => {      // array.filter() 유용
          return x.id === this.state.selected_content_id;
        });

        _title = data[0].title;
        _desc = data[0].desc;

      } catch (e) {
        console.log(e.stack);
      }
    }

    return (
      <div className="App">
        <Subject title={this.state.subject.title} sub={this.state.subject.sub} handleClick={this.handleSubjectClick}></Subject>
        <TOC data={this.state.contents} handleClick={this.handleTOCClick}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
