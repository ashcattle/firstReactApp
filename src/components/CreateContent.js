import React, { Component } from 'react';

class CreateContent extends Component {
    render() {
        console.log("CreateContent render");

        return (
            <div>
                <h2>Create</h2>
                <form action="/create_process" method="post" 
                        onSubmit={(e) => {
                            e.preventDefault();
                            let data = { id: null, title: e.target.title.value, desc: e.target.desc.value }
                            this.props.onSubmit(data);
                        }}>
                    <p>
                        <input type="text" name="title" placeholder="title" />
                    </p>
                    <p>
                        <textarea name="desc" placeholder="description"></textarea>
                    </p>
                    <p>
                        <input type="submit" />
                    </p>
                </form>
            </div>
        );
    }
}

export default CreateContent;