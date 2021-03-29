import './App.css';
import React, { Component } from 'react';
import Subject from './components/Subject';
import TOC from './components/TOC';
import Content from './components/Content';
import Control from './components/Control';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mode: 'welcome',  // 현재 페이지가 welcome 페이지인지 read 페이지인지 구분하기 위한 구분자
      selected_content_id: null,
      subject: { title: 'WEB', sub: 'world wide WEB!' },
      welcome: { title: 'Welcome', desc: 'Hello React!' },
      contents: [
        { id: 0, title: 'HTML', desc: 'HTML is for information' },
        { id: 1, title: 'CSS', desc: 'CSS is for design' },
        { id: 2, title: 'JavaScript', desc: 'JavaScript is for interactive' }
      ]
    }
  }

  render() {
    console.log("App render");

    return (
      <div className="App">
        <Subject title={this.state.subject.title} sub={this.state.subject.sub} handleClick={this.handleSubjectClick}></Subject>
        <Control handleControl={this.handleControlClick}></Control>
        <TOC data={this.state.contents} handleClick={this.handleTOCClick}></TOC>
        <Content data={this.state} onSubmit = {this.onSubmit}></Content>
      </div>
    );
  }

  // Subject Click Handler
  handleSubjectClick = (e) => {
    e.preventDefault(); // preventDefault() 함수는 태그의 기본 동작을 정지시킨다. 해당 태그를 클릭할 때 페이지가 이동하지 않을 것
    this.setState({
      mode: 'welcome',
      selected_content_id: null
    });
  }

  // TOC Click Handler
  handleTOCClick = (id) => {
    this.setState({
      mode: 'read',
      selected_content_id: Number(id)  // 파라미터들은 문자열로 형변환됨, 이벤트 파라미터로 받을 때 e.target.dataset.id
    });
  }

  // Control Click Handler
  handleControlClick = (e) => {
    e.preventDefault();

    if (e.target.dataset.mode !== "create" && this.state.selected_content_id == null) {
      alert("항목을 선택해주세요.");
      return;
    }

    if (e.target.dataset.mode === "delete") {
      this.deleteControl();
      return;
    }

    this.setState({
      mode: e.target.dataset.mode
    });
  }

  // Delete Event
  deleteControl = () => {
    const newArr = [...this.state.contents.slice(0, this.state.selected_content_id),
                    ...this.state.contents.slice(this.state.selected_content_id+1, this.state.contents.length)];
    
    this.setState({
      mode: 'welcome',
      selected_content_id: null,
      contents: newArr
    });
  }

  // Create and Update Submit
  onSubmit = (content) => {
    let newArr = null;

    if (content.id == null) {
      content.id = this.state.contents.length;
      newArr = [...this.state.contents, content];

    } else {
      newArr = [...this.state.contents.slice(0, content.id), 
                content, 
                ...this.state.contents.slice(content.id+1, this.state.contents.length)];
    }

    this.setState({
      mode: 'read',
      selected_content_id: content.id,
      contents: newArr
    });
  }
}

export default App;
