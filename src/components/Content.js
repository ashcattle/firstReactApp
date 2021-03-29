import React, { Component } from 'react';
import ReadContent from './ReadContent';
import CreateContent from './CreateContent';
import UpdateContent from './UpdateContent';

class Content extends Component {
    render() {
        console.log("Content render");

        let tag, content = null;
        let data = this.props.data;

        if (data.mode === 'welcome') {
            tag = <ReadContent title={data.welcome.title} desc={data.welcome.desc}></ReadContent>

        } else if (data.mode === 'read') {
            content = data.contents.filter(x => {  // array.filter()는 항상 배열을 모두 순회하므로 성능을 고려할 땐 for문 등을 사용
                return x.id === data.selected_content_id;
            });

            tag = <ReadContent title={content[0].title} desc={content[0].desc}></ReadContent>    

        } else if (data.mode === 'create') {
            tag = <CreateContent onSubmit={this.props.onSubmit}></CreateContent>

        } else if (data.mode === 'update') {
            content = data.contents.filter(x => {
                return x.id === data.selected_content_id;
            });

            tag = <UpdateContent id={content[0].id} title={content[0].title} desc={content[0].desc} onSubmit={this.props.onSubmit}></UpdateContent>
        }

        return (
            <article>
                {tag}
            </article>
        );
    }
}

export default Content;